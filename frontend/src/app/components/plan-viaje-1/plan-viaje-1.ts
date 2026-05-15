import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-viaje-1',
  imports: [CommonModule],
  templateUrl: './plan-viaje-1.html',
  styleUrl: './plan-viaje-1.css',
})
export class PlanViaje1 {

  // Emitimos el evento para cerrar el modal
  @Output() cerrar = new EventEmitter<void>();

  paises = [
    { nombre: 'Noruega', id: 'noruega', flagUrl: 'planea-viaje1/noruega.png' }, // Pon la ruta real de tu bandera
    { nombre: 'Alemania', id: 'alemania', flagUrl: 'planea-viaje1/alemania.png' },
    { nombre: 'Francia', id: 'francia', flagUrl: 'planea-viaje1/francia.png' }
  ];

  constructor(private router: Router) { } // Inyecta el Router

  onCerrar(): void {
    this.cerrar.emit();
  }

  // Función para ir a la pantalla del país y cerrar el modal
  seleccionarPais(paisId: string): void {
    this.router.navigate(['/pais', paisId]);
    this.onCerrar();
  }

}
