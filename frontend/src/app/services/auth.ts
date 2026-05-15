import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Usuario } from '../models/usuario';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Auth { 
   // Esta variable nos ayudará a saber si el usuario está logueado o no. La usaremos para mostrar u ocultar ciertas partes de la interfaz.
  isLoggedIn = signal<boolean>(false);

  // Aquí guardaremos el usuario cuando Laravel nos confirme que existe
  private usuarioActual: Usuario | null = null;

  // La ruta exacta de tu puerta en Laravel
  private urlLogin = 'http://127.0.0.1:8000/api/login';
  private urlRegistro = 'http://127.0.0.1:8000/api/registro';
  
  // Inyectamos HttpClient para poder hacer peticiones a Laravel
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    if (isPlatformBrowser(this.platformId)) {
      const rolGuardado = localStorage.getItem('rolUsuario');
      if (rolGuardado) {
        this.usuarioActual = {
          id: '',
          nombre: 'Usuario',
          email: '',
          rol: rolGuardado as 'administrador' | 'cliente'
        };

        // Si encontramos un rol guardado, asumimos que el usuario está logueado
        this.isLoggedIn.set(true);
      }
    }
  }
  
  // Función para iniciar sesión. Recibe el email y la contraseña que el usuario ingresó en tu pantalla de Login.
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.urlLogin, { email, password }).pipe(
      tap(respuesta => {
        // "tap" sirve para interceptar la respuesta de Laravel antes de que llegue a tu pantalla de Login.
        // Si Laravel dice que está OK, guardamos el usuario en tu variable de sesión.
        if (respuesta.status === true) {
          this.usuarioActual = {
            id: respuesta.usuario.id.toString(),
            nombre: respuesta.usuario.nombre,
            email: respuesta.usuario.email,
            // Ajustamos el rol (por si en tu BD dice 'admin' en vez de 'administrador')
            rol: respuesta.usuario.rol 
          };

          // Guardamos el usuario en la memoria del navegador
          localStorage.setItem('rolUsuario', respuesta.usuario.rol);
          // Marcamos que el usuario está logueado
          this.isLoggedIn.set(true);
        }
      })
    );
  }

  // Función para registrarse. Recibe los datos del nuevo usuario.
  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post<any>(this.urlRegistro, datosUsuario);
  }

  logout() {
    this.usuarioActual = null;
    localStorage.removeItem('token');
    // Acuérdate de borrar también el rol al salir
    localStorage.removeItem('rolUsuario');

    // Marcamos que el usuario ya no está logueado
    this.isLoggedIn.set(false);
  }

  getUsuarioActual(): Usuario | null {
    return this.usuarioActual;
  }

  esAdministrador(): boolean {
    return this.usuarioActual?.rol === 'administrador';
  }
}
