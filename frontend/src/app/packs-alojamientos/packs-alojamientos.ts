import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Paises } from '../services/paises';
import { Ciudad } from '../pais.model';
import { Reserva } from '../services/reserva';

@Component({
  selector: 'app-packs-alojamientos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packs-alojamientos.html',
  styleUrl: './packs-alojamientos.css',
})
export class PacksAlojamientos implements OnInit {
  ciudad: Ciudad | undefined;
  paisNombre: string = ''; // Guardamos el nombre del país para mostrarlo en la plantilla

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
      this.paisNombre = pais?.nombre || ''; // Guardamos el nombre del país
      this.ciudad = pais?.ciudades.find(c => c.nombre.toLowerCase() === ciudadNombre.toLowerCase());
      
    }
  }

  // Función para enviar al pago
  irAReserva(alojamiento: any) {
    if (!this.ciudad) return;

    this.reservaService.setReserva({
      // Usamos el "nombre" o "titulo" dependiendo de cómo lo llamaste en tu BD
      nombre: alojamiento.nombre || alojamiento.titulo, 
      tipo: 'alojamiento',
      precio: alojamiento.precioDesde || alojamiento.precio, 
      // Si tienes un array de detallesAlojamiento lo usamos, si no usamos la descripción normal
      detalles: alojamiento.detallesAlojamiento || [alojamiento.descripcion], 
      ciudad: this.ciudad.nombre,
      pais: this.paisNombre
    });

    this.router.navigate(['/personalizar']);
  }
  

  volver() {
    this.location.back();
  }

  irActividades() {
    const paisId = this.route.snapshot.paramMap.get('paisId');
    const ciudadNombre = this.route.snapshot.paramMap.get('ciudadNombre');
    if (paisId && ciudadNombre) {
      this.router.navigate(['/pais', paisId, 'ciudad', ciudadNombre.toLowerCase(), 'actividades']);
    }
  }
  
}
