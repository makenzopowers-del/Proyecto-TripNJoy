import { Component, ElementRef, HostListener } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Evento para emitir el login
  @Output() abrirLogin = new EventEmitter<void>();

  // Variable para controlar si el menú desplegable está visible
  isDropdownOpen = false;

  // Inyectamos el servicio de autenticación para poder usarlo en el template
  constructor(public auth: Auth, private router: Router, private eRef: ElementRef) {}

  // Función para comprobar si el usuario es admin
  isAdmin(): boolean {
    // Comprobamos que la ventana del navegador existe (evita errores en SSR)
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('rol') === 'admin';
    }
    return false;
  }

  // Función que se ejecuta al hacer clic
  onBotonUneteClick() {
    console.log('¡El botón funciona y está avisando al padre!');
    this.abrirLogin.emit(); // Disparamos el evento hacia el padre
  }

  // 3. Añadimos la función para cerrar sesión
  onLogout() {
    // Comprobamos también aquí por si acaso
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('rol');
      localStorage.removeItem('token');
    }
    this.auth.logout(); // Llamamos al servicio para borrar el token y apagar la señal
    this.router.navigate(['/']); // Redirigimos a la página de inicio
  }

  // Alterna entre abrir y cerrar el menú al hacer clic en el botón
  toggleDropdown(event: Event) {
    event.stopPropagation(); // Evita que el clic se propague y lo cierre instantáneamente
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Cierra el menú si el usuario hace clic en cualquier otra parte de la pantalla
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  
}
