import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';


export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

    // 1. Verificamos que estamos en el entorno del navegador real
    if (typeof window !== 'undefined' && window.localStorage) {
      
      // 2. Comprobamos el rol directamente de forma segura
      const rol = localStorage.getItem('rol');
      
      if (rol === 'admin') {
        console.log('¡El portero te deja pasar! Eres admin.');
        return true; // Vía libre
      }
    }

    // Si llegamos aquí, es porque no es admin o estamos renderizando en el servidor
    console.log('¡Alto ahí! No eres admin. De vuelta al inicio.');
    router.navigate(['/']); // Lo mandamos a la página de inicio
    return false; // Bloqueamos el paso
    
  };
