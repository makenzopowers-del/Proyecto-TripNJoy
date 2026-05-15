import { Component, OnInit} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Reserva, ReservaActual } from '../../services/reserva';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pago.html',
  styleUrl: './pago.css',
})
export class Pago implements OnInit {
  reserva: any = null;

  // Datos del formulario
  nombreTitular: string = '';
  email: string = '';
  numeroTarjeta: string = '';
  expiracion: string = '';
  cvv: string = '';

  constructor(
    private reservaService: Reserva,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    // 1. Leemos el ticket infalible del almacenamiento del navegador
    const datosGuardados = localStorage.getItem('ticket_checkout');

    if (datosGuardados) {
      // Si existe, lo convertimos de texto a objeto y lo cargamos
      this.reserva = JSON.parse(datosGuardados);
      console.log('¡Reserva rescatada con éxito!:', this.reserva);
    } else {
      // Solo si no hay nada guardado mostramos el error de la pantalla oscura
      this.reserva = null;
      console.log('No se encontró ninguna reserva en curso.');
    }
  }

  finalizarCompra() {
    if (this.nombreTitular && this.email && this.numeroTarjeta) {
      alert(`¡Gracias por tu compra, ${this.nombreTitular}!\nTe hemos enviado la confirmación a ${this.email}.\n¡Buen viaje a ${this.reserva?.ciudad}!`);
      
      // Limpiamos la memoria al terminar para que el próximo viaje empiece de cero
      localStorage.removeItem('ticket_checkout');
      localStorage.removeItem('reserva_activa'); 
      this.router.navigate(['/']);
    } else {
      alert('Por favor, rellena todos los campos de pago.');
    }
  }

  volver() {
    this.location.back();
  }
}
