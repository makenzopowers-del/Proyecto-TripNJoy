import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common'; // Location para el botón de volver
import { Paises } from '../../services/paises';
import { Pais } from '../../pais.model';

@Component({
  selector: 'app-pais-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pais-detalle.html',
  styleUrl: './pais-detalle.css',
})
export class PaisDetalle implements OnInit{

  pais: Pais | undefined;

  constructor(
    private route: ActivatedRoute,
    private paisesService: Paises,
    private location: Location,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Obtenemos el parámetro 'nombre' de la URL (ej. 'noruega')
    this.route.paramMap.subscribe(params => {
      const paisId = params.get('nombre');
      if (paisId) {
        // Obtenemos los datos del país desde el servicio
        this.pais = this.paisesService.getPaisPorId(paisId);
      }
    });

    // Aplicamos el cursor personalizado al body
    document.body.classList.add('custom-cursor');
  }

  // Función para navegar a la pantalla de detalle de la ciudad
    irACiudad(ciudadNombre: string) {
      if (this.pais) {
        // Esto construye la ruta: /pais/noruega/ciudad/oslo
        this.router.navigate(['/pais', this.pais.id, 'ciudad', ciudadNombre.toLowerCase()]);
      }
    }

  // Al salir del componente, quitamos el cursor personalizado
  ngOnDestroy(): void {
    document.body.classList.remove('custom-cursor');
  }

  // Función para el botón 'Volver'
  volver(): void {
    this.location.back();
  }

}
