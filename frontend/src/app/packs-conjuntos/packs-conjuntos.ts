import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Paises } from '../services/paises';
import { Ciudad } from '../pais.model';
import { Reserva } from '../services/reserva';

@Component({
  selector: 'app-packs-conjuntos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packs-conjuntos.html',
  styleUrl: './packs-conjuntos.css',
})
export class PacksConjuntos implements OnInit {
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
      this.ciudad = pais?.ciudades.find(c => c.nombre.toLowerCase() === ciudadNombre.toLowerCase());
    }
  }

  // Función para manejar la reserva de un pack conjunto
  irAReserva(pack: any) {
    if (!this.ciudad) return;

    this.reservaService.setReserva({
      nombre: pack.nombre || pack.titulo,
      tipo: 'pack',
      precio: pack.precioDesde,
      // Los packs conjuntos suelen tener detalles combinados (alojamiento + actividad). Juntamos los dos arrays:
      detalles: [...(pack.detallesAlojamiento || []), ...(pack.detallesActividades || [])],
      ciudad: this.ciudad.nombre,
      pais: this.paisNombre
    });

    this.router.navigate(['/personalizar']);
  }

  volver() {
    this.location.back();
  }
}
