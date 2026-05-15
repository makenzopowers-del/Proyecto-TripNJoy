import { Injectable } from '@angular/core';

// Definimos una interfaz sencilla para lo que vamos a reservar
export interface ReservaActual {
  nombre: string;
  tipo: 'actividad' | 'alojamiento' | 'pack';
  precio: number;
  detalles: string[];
  ciudad: string;
  pais: string;
  imagen?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Reserva {
  // Guardamos lo que el usuario quiere comprar
  private seleccion: ReservaActual | null = null;

  constructor() {}
  
  // Método para guardar lo que el usuario quiere reservar
  setReserva(datos: ReservaActual) {
    this.seleccion = datos;
    // Opcional: Guardar en localStorage por si el usuario recarga la página
    localStorage.setItem('reserva_activa', JSON.stringify(datos));
  }

  // Método para obtener los datos en la pantalla de pago
  getReserva(): ReservaActual | null {
    if (!this.seleccion) {
      const guardado = localStorage.getItem('reserva_activa');
      if (guardado) this.seleccion = JSON.parse(guardado);
    }
    return this.seleccion;
  }

  // Función para limpiar la reserva (útil después de pagar)
  limpiarReserva() {
    this.seleccion = null;
    localStorage.removeItem('reserva_activa');
  }
}
