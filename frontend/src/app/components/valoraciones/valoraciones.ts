import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Importamos Location para el botón de volver

@Component({
  selector: 'app-valoraciones',
  imports: [CommonModule],
  templateUrl: './valoraciones.html',
  styleUrl: './valoraciones.css',
})
export class Valoraciones {
  constructor(private location: Location) {}

  // Función para el botón 'Volver'
  volver(): void {
    this.location.back();
  }
}
