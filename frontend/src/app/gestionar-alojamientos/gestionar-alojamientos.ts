import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestionar-alojamientos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gestionar-alojamientos.html',
  styleUrl: './gestionar-alojamientos.css'
})
export class GestionarAlojamientos {
  alojamientos = [
    { id: 1, nombre: 'Hotel Azul Mar', tipo: 'Hotel', capacidad: 4, precio: '120€/noche', estado: 'Disponible' },
    { id: 2, nombre: 'Cabaña Bosque Vivo', tipo: 'Cabaña', capacidad: 2, precio: '85€/noche', estado: 'Ocupado' },
    { id: 3, nombre: 'Apartamento Centro', tipo: 'Apartamento', capacidad: 6, precio: '150€/noche', estado: 'Disponible' },
  ];
}
