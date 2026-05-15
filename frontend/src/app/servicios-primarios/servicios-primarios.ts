import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios-primarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicios-primarios.html',
  styleUrl: './servicios-primarios.css'
})
export class ServiciosPrimarios {
  // Lista de servicios esenciales para Trip N' Joy
  servicios = [
    { id: 101, nombre: 'Seguro de Viaje Premium', categoria: 'Seguros', precio: '45€', estado: 'Activo' },
    { id: 102, nombre: 'Guía Local Privado', categoria: 'Personal', precio: '120€', estado: 'Activo' },
    { id: 103, nombre: 'Transfer Aeropuerto', categoria: 'Transporte', precio: '35€', estado: 'Inactivo' },
    { id: 104, nombre: 'Pack Desayuno Buffet', categoria: 'Alimentación', precio: '18€', estado: 'Activo' },
    { id: 105, nombre: 'Alquiler de Equipo Kayak', categoria: 'Equipamiento', precio: '25€', estado: 'Activo' },
  ];
}