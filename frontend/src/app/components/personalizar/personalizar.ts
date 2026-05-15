import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Reserva, ReservaActual } from '../../services/reserva';

@Component({
  selector: 'app-personalizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personalizar.html',
  styleUrl: './personalizar.css',
})
export class Personalizar implements OnInit {
  reserva: ReservaActual | null = null;

  // Variables para que el usuario personalice su viaje
  personas: number = 1;
  fechaViaje: string = '';

  // Tarifa de gestión fija de 12.50€ por reserva
  tarifaGestion: number = 12.50; 

  constructor(
    private reservaService: Reserva,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    // 1. Preguntamos al servicio qué ha elegido el usuario
    this.reserva = this.reservaService.getReserva();

    // 2. Si alguien entra a esta página de golpe sin haber elegido nada, lo echamos al inicio
    if (!this.reserva) {
      this.router.navigate(['/']);
    }
  }

  // Calculadora automática del Subtotal (Precio * Personas)
  // El '?.' evita que la página rompa si 'reserva' es null
  get subtotal(): number {
    return (this.reserva?.precio || 0) * this.personas;
  }

  // Calculadora automática del Total a pagar (Subtotal + Tarifa)
  get precioTotal(): number {
    return this.subtotal + this.tarifaGestion;
  }

  procederAlPago() {
    if(!this.fechaViaje) {
      alert("⚠️ Por favor, selecciona una fecha para tu viaje.");
      return;
    }
    
    // 1. EMPAQUETAMOS EL TICKET FINAL CON LOS DATOS NUEVOS
    const ticketFinal = {
      ...this.reserva, // Copia el nombre, ciudad, etc.
      personas: this.personas, 
      fechaViaje: this.fechaViaje, 
      subtotal: this.subtotal, 
      tarifaGestion: this.tarifaGestion,
      precioTotal: this.precioTotal 
    };

    // 2. LO GUARDAMOS A FUEGO EN EL NAVEGADOR (¡A prueba de fallos!)
    localStorage.setItem('ticket_checkout', JSON.stringify(ticketFinal));
    
    // 3. Viajamos a la pasarela de pago
    this.router.navigate(['/pago']);
  }

  volver() {
    this.location.back();
  }

}