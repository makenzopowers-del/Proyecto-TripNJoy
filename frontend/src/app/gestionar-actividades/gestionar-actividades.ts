import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestionar-actividades',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gestionar-actividades.html',
  styleUrl: './gestionar-actividades.css'
})
export class GestionarActividades {
  actividades = [
    { id: 1, nombre: 'Ruta en Kayak', ubicacion: 'Costa Brava', plazas: 20, estado: 'Activa' },
    { id: 2, nombre: 'Escalada guiada', ubicacion: 'Pirineos', plazas: 10, estado: 'Pausada' },
    { id: 3, nombre: 'Tour Gastronómico', ubicacion: 'Madrid Centro', plazas: 15, estado: 'Activa' },
    { id: 4, nombre: 'Buceo Básico', ubicacion: 'Islas Baleares', plazas: 8, estado: 'Completa' },
  ];
}
