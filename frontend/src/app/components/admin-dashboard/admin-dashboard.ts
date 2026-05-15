import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})

export class AdminDashboard {
  // Estos números en un futuro vendrán de tu base de datos.
  // Es importante que sean números (number) y no strings ("1560").
  totalActividades: number = 1560;
  totalUsuarios: number = 12500;
  totalAlojamientos: number = 1250;

  constructor(private router: Router) {}

  irAGestionarActividades() {
    this.router.navigate(['/admin/actividades']);
  }

  irAAdministrarUsuarios() {
    this.router.navigate(['/admin/usuarios']);
  }

  irAGestionarAlojamientos() {
    this.router.navigate(['/admin/alojamientos']);
  }

  irAServiciosPrimarios() {
  this.router.navigate(['/admin/servicios-primarios']);
}
}
