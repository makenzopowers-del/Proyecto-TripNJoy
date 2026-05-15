import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-administrar-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './administrar-usuarios.html',
  styleUrl: './administrar-usuarios.css'
})
export class AdministrarUsuarios {
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@email.com', rol: 'Admin', registro: '12/01/2024' },
    { id: 2, nombre: 'María García', email: 'm.garcia@tripnjoy.com', rol: 'Cliente', registro: '05/02/2024' },
    { id: 3, nombre: 'Carlos Ruiz', email: 'cruiz_travel@gmail.com', rol: 'Cliente', registro: '20/02/2024' },
    { id: 4, nombre: 'Ana Martínez', email: 'ana.mtz@outlook.es', rol: 'Admin', registro: '01/03/2024' },
  ];
}
