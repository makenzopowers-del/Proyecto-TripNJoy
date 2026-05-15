export interface Ciudad {
  nombre: string;
  imagenFondo: string;
  imagenDetalle: string;
  descripcion: string;
  clima?: string;
  idioma?: string;
  moneda?: string;
  puntosFuertes?: string[];
  actividades?: Actividad[];
  alojamientos?: Alojamiento[];
  packsConjuntos?: PackConjunto[];
}

export interface Pais { // Interfaz para representar un país
  id: string;
  nombre: string;
  imagenFondo: string;
  eslogan?: string;           
  tags?: string[];             
  datosGenerales?: {           
    epoca?: string;
    idioma?: string;
    moneda?: string;
  };
  ciudades: Ciudad[];
}

export interface Actividad { // Interfaz para representar una actividad
  titulo: string;
  descripcion: string; //
  precioDesde?: number; // Para actividades que tienen precio
  textoBoton?: string;  // Para personalizar el texto del botón de reserva
  imagenes: string[]; // Para mostrar imágenes relacionadas con la actividad en la pantalla de detalles del país o ciudad
}

export interface Alojamiento { // Interfaz para representar un alojamiento
  tipo: string;
  descripcion: string;
  precioDesde: number;
  imagenes: string[]; // Para mostrar imágenes relacionadas con el alojamiento en la pantalla de detalles del país o ciudad
}

export interface PackConjunto { // Interfaz para representar un pack conjunto de alojamiento + actividades
  nombre: string;
  detallesAlojamiento: string[];
  detallesActividades: string[];
  precioDesde: number;
  imagenes: string[]; // Para mostrar imágenes relacionadas con el pack conjunto en la pantalla de detalles del país o ciudad
}