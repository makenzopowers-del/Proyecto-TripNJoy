import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, AfterViewInit {

  // Creamos el emisor para avisar de que queremos cerrar
  @Output() cerrarLogin = new EventEmitter<void>();

  // Variables donde se guardará lo que el usuario escriba
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: Auth) {}

  // Inicializamos Google Identity Services al cargar el componente
  ngOnInit() {
    google.accounts.id.initialize({
      client_id: "TU_CLIENT_ID_DE_GOOGLE",
      callback: (response: any) => this.handleGoogleResponse(response)
    });
  }

  // Renderizamos el botón cuando la vista ya está cargada
  ngAfterViewInit() {
    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large", width: "100%" }
    );
  }

  handleGoogleResponse(response: any) {
    console.log("Token JWT de Google:", response.credential);

    // Aquí decides qué hacer con el token:
    // - Enviarlo a tu backend Laravel
    // - Guardarlo en localStorage
    // - Obtener datos del usuario desde Google
  }

  //Función para el botón de cerrar
  onCerrarClick() {
  console.log('Login: click cerrar');
  this.cerrarLogin.emit(); // Emitimos el evento para avisar a Home que queremos cerrar el modal
}

  //Función para el botón "Entrar"
  onEntrar() {
    // Si los campos están vacíos, no hacemos nada
    if (!this.email || !this.password) {
      alert('Por favor, rellena todos los campos');
      return;
    }
    
    // Llamamos a Laravel usando nuestro servicio
    this.authService.login(this.email, this.password).subscribe({
      next: (respuesta) => {
        // Laravel respondió con éxito
        console.log('Respuesta de Laravel:', respuesta);

        // Guardamos el token en el navegador
        localStorage.setItem('token', respuesta.token);

        // 1. PRIMERO DEFINIMOS LAS VARIABLES
        const usuario = respuesta.user || respuesta.usuario;
        const rol = usuario?.rol || usuario?.role;

        // 2. AHORA SÍ, GUARDAMOS EL ROL SI EXISTE
        if (rol) {
          localStorage.setItem('rol', rol);
        }

        // Cerramos el modal
        this.cerrarLogin.emit();

        // 3. REDIRIGIMOS
        if (rol === 'admin') {
          console.log('Navegando a dashboard de admin...');
          this.router.navigate(['/admin']); 
        } else {
          console.log('Navegando al home normal del cliente...');
          this.router.navigate(['/']);
        }
      },

      error: (error) => {
        // Laravel devolvió error (ej. 401 Unauthorized)
        alert('Correo o contraseña incorrectos');
        console.error(error);
      }
    });
  }
}
