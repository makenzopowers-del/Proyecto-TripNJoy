import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { Login } from '../login/login';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Login],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  isLoginVisible = false;

  constructor(private modalService: ModalService, public auth: Auth, private router: Router ) {
    // Suscribimos aquí por si ngOnInit no se está llamando
    this.modalService.abrirLogin.subscribe(() => {
      this.isLoginVisible = true;
      console.log('Home: abrir login');
    });
  }

   ngOnInit() {
    // Cuando otro componente pida abrir el login → se muestra
    this.modalService.abrirLogin.subscribe(() => {
      this.isLoginVisible = true;
    });
  }

  cerrarLoginModal() {
    this.isLoginVisible = false;
  }

  onVClick() {
    if (this.auth.isLoggedIn()) {
      // Si está logueado, abre el selector de país (tu lógica original)
      this.modalService.abrirPlanViaje.emit();
    } else {
      // Si no está logueado, hace scroll suave hacia la sección de servicios
      const elemento = document.getElementById('servicios');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  // Método para manejar el clic en "Ver Detalles"
  verDetalles(rutaDestino: string) {
    if (this.auth.isLoggedIn()) {
      // Si está logueado, le permitimos viajar a esa ruta (ej: '/alojamientos')
      this.router.navigate([rutaDestino]);
    } else {
      // Si no está logueado, le abrimos la ventana de Iniciar Sesión/Registro
      // (Asegúrate de que tu ModalService tenga este EventEmitter si no lo tiene ya)
      this.modalService.abrirLogin.emit(); 
    }
  }
}
