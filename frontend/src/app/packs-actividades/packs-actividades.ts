import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Paises } from '../services/paises';
import { Ciudad } from '../pais.model';
import { Reserva } from '../services/reserva';

@Component({
  selector: 'app-packs-actividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packs-actividades.html',
  styleUrl: './packs-actividades.css',
})
export class PacksActividades implements OnInit {
  ciudad: Ciudad | undefined;
  paisNombre: string | null = null; // Guardamos el nombre del país para mostrarlo en la plantilla

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paisesService: Paises,
    private location: Location,
    private reservaService: Reserva
  ) {}

  ngOnInit(): void {
    const paisId = this.route.snapshot.paramMap.get('paisId');
    const ciudadNombre = this.route.snapshot.paramMap.get('ciudadNombre');

    if (paisId && ciudadNombre) {
      const pais = this.paisesService.getPaisPorId(paisId);
      this.paisNombre = pais?.nombre || null; // Guardamos el nombre del país
      this.ciudad = pais?.ciudades.find(c => c.nombre.toLowerCase() === ciudadNombre.toLowerCase());
    }
  }

  // Función para manejar la reserva de una actividad
  irAReserva(actividad: any) {
    if (!this.ciudad) return;

    // Guardamos los datos de esta actividad en específico
    this.reservaService.setReserva({
      nombre: actividad.titulo,
      tipo: 'actividad',
      precio: actividad.precioDesde,
      detalles: [actividad.descripcion], 
      ciudad: this.ciudad.nombre,
      pais: this.paisNombre || ''
    });

    // Nos llevamos a la pantalla de pago
    this.router.navigate(['/personalizar']);
  }

  irAlojamientos() {
    const paisId = this.route.snapshot.paramMap.get('paisId');
    const ciudadNombre = this.route.snapshot.paramMap.get('ciudadNombre');
    if (paisId && ciudadNombre) {
      this.router.navigate(['/pais', paisId, 'ciudad', ciudadNombre.toLowerCase(), 'alojamientos']);
    }
  }

  volver() {
    this.location.back();
  }

}
