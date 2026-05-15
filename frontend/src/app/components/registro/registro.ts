import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})

export class Registro {
  registroForm: FormGroup;

  // Inyectamos FormBuilder, el Auth y el router para crear nuestro formulario reactivo
  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue] 
    }, { validators: this.passwordsMatchValidator }); 
  }

  // Función para comprobar que las contraseñas son idénticas
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    // Si no coinciden, devolvemos un error. Si coinciden, devolvemos null (todo ok).
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  // Se ejecuta al hacer clic en "Registrarme"
  onSubmit() {
    if (this.registroForm.valid) {
      // 1. Extraemos los datos que Laravel SÍ necesita (ignoramos confirmPassword y terms)
      const { confirmPassword, terms, ...datosParaBackend } = this.registroForm.value;

      // 2. Llamamos a tu servicio Auth
      this.auth.registrarUsuario(datosParaBackend).subscribe({
        next: (respuesta: any) => {
          console.log('¡Usuario creado en Laravel!', respuesta);
          // 3. Si todo va bien, lo mandamos al login para que entre
          alert('¡Registro completado! Ahora puedes iniciar sesión.');
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Error desde Laravel:', error);
          alert('Hubo un problema al registrarte. Quizás el email ya existe.');
        }
      });
    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}
