import { Injectable } from '@angular/core';
import { Pais } from '../pais.model';

@Injectable({
  providedIn: 'root',
})
export class Paises {

  // Aquí está la información detallada de cada país
  private paises: Pais[] = [
    {
      id: 'noruega',
      nombre: 'NORUEGA',
      imagenFondo: 'noruega/fondo-noruega.jpeg',
      eslogan: 'Descubre la tierra de los fiordos y la magia de las luces del norte.',
      tags: ['Naturaleza', 'Aventura', 'Cultura Vikinga'],
      datosGenerales: {
      epoca: 'Mayo - Septiembre',
      idioma: 'Noruego / Inglés',
      moneda: 'Corona Noruega (NOK)'
  },
      ciudades: [
        { 
          nombre: 'OSLO', 
          imagenFondo: 'noruega/oslo.jpg', // La que sale en la pantalla principal del país
          imagenDetalle: 'noruega/imagen-oslo.jpg', // La nueva imagen para esta pantalla
          descripcion: 'Oslo, la capital de Noruega, es una ciudad que combina naturaleza, cultura contemporánea e historia vikinga en un entorno moderno y sostenible. Situada entre el fiordo de Oslo y extensos bosques, ofrece actividades para todo tipo de viajeros.',
          clima: 'Subártico',
          idioma: 'Noruego',
          moneda: 'Corona Noruega',
          puntosFuertes: ['Arquitectura de vanguardia', 'Museos vikingos', 'Sostenibilidad', 'Cercanía al fiordo'],
          // PACKS DE OSLO
          actividades: [
            { titulo: 'Visita instituciones culturales y museos', descripcion: 'Oslo es reconocida por su vibrante escena cultural. Puedes visitar el Museo Munch para admirar obras de Edvard Munch, incluido El Grito. También destaca el Museo Nacional de Noruega, que alberga arte clásico y contemporáneo. La moderna Ópera de Oslo permite caminar por su techo inclinado con vistas al fiordo.', precioDesde: 89, imagenes: ['noruega/imagen-oslo-1.jpg', 'noruega/imagen-oslo-2.jfif', 'noruega/imagen-oslo-3.jpg']  },
            { titulo: 'Herencia vikinga y náutica', descripcion: 'El Museo Fram muestra el famoso barco polar Fram y relata las expediciones al Ártico y la Antártida. Además, en la península de Bygdøy se concentran varios museos dedicados a la tradición marítima noruega.', precioDesde: 119, imagenes: ['noruega/imagen-oslo-4.jpg', 'noruega/imagen-oslo-5.jpg', 'noruega/imagen-oslo-6.jpg'] },
            { titulo: 'Aprecia el entorno natural', descripcion: 'Oslo es ideal para actividades al aire libre. Se puede pasear en barco por el fiordo de Oslo, hacer senderismo en los bosques de Nordmarka o disfrutar de sus playas urbanas en verano. En invierno, el esquí de fondo es muy popular en las colinas que rodean la ciudad.', precioDesde: 149, imagenes: ['noruega/imagen-oslo-7.jpg', 'noruega/imagen-oslo-8.jpg', 'noruega/imagen-oslo-9.jpg'] },
            { titulo: 'Pasea por parques y lugares icónicos', descripcion: 'El Parque Vigeland, dentro del parque Frogner, exhibe más de 200 esculturas del artista Gustav Vigeland. También es recomendable caminar por el barrio de Aker Brygge, lleno de restaurantes y vistas al mar.', precioDesde: 79, imagenes: ['noruega/imagen-oslo-10.jpg', 'noruega/imagen-oslo-11.jpg', 'noruega/imagen-oslo-12.jpg'] },
            { titulo: 'Degusta la cocina de la región', descripcion: 'La ciudad ofrece desde mercados gastronómicos hasta restaurantes con estrellas Michelin. Es posible degustar salmón fresco, bacalao, reno y postres tradicionales noruegos en ambientes que van desde lo rústico hasta lo vanguardista.', precioDesde: 139, imagenes: ['noruega/imagen-oslo-13.jpg', 'noruega/imagen-oslo-14.jpg', 'noruega/imagen-oslo-15.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Hostales económicos', descripcion: 'Opciones accesibles para mochileros y viajeros jóvenes, con habitaciones compartidas o privadas.', precioDesde: 35, imagenes: ['noruega/imagen-oslo-hostal1.jpg', 'noruega/imagen-oslo-hostal2.jpg'] },
            { tipo: 'Hostal privado', descripcion: 'Habitaciones privadas dentro de hostales, ideales para quienes buscan más privacidad manteniendo un precio económico.', precioDesde: 65, imagenes: ['noruega/imagen-oslo-hostal3.jpg', 'noruega/imagen-oslo-hostal4.jpg'] },
            { tipo: 'Hostales 3 estrellas', descripcion: 'Hoteles cómodos y funcionales con servicios básicos, buena ubicación y habitaciones privadas con baño.', precioDesde: 95, imagenes: ['noruega/imagen-oslo-hotel3.jpg', 'noruega/imagen-oslo-hotel4.jpg'] },
            { tipo: 'Hostales 4 estrellas', descripcion: 'Alojamientos de mayor categoría con habitaciones amplias, mejores instalaciones y servicios adicionales para una estancia más confortable.', precioDesde: 130, imagenes: ['noruega/imagen-oslo-hotel5.jpg', 'noruega/imagen-oslo-hotel6.jpg'] },
            { tipo: 'Hostales 5 estrellas', descripcion: 'Hoteles de lujo con servicios exclusivos, ubicaciones privilegiadas y una experiencia de alojamiento de alto nivel.', precioDesde: 200, imagenes: ['noruega/imagen-oslo-hotel7.jpg', 'noruega/imagen-oslo-hotel8.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Económico', detallesAlojamiento: ['Hostel compartido o privado', 'Precio: 35€ – 55€'], detallesActividades: ['Visita al parque escultórico Frogner Park, el parque más visitado de Noruega con más de 200 esculturas.', 'Paseo por el barrio marítimo Aker Brygge', 'Ruta urbana por el centro histórico'], precioDesde: 120, imagenes: ['noruega/imagen-oslo-pack1.jpg', 'noruega/imagen-oslo-pack2.jpg', 'noruega/imagen-oslo-pack3.jpg'] },
            { nombre: 'Pack "Arte y Marina"', detallesAlojamiento: ['Suite Ejecutiva o Loft de Diseño', 'Precio: 140€ – 200€'], detallesActividades: ['Visita magistral al Museo al aire libre de Vigeland (Frogner Park).', 'Atardecer en los muelles vanguardistas de Aker Brygge.', 'Descubrimiento guiado del casco antiguo y sus leyendas.'], precioDesde: 290, imagenes: ['noruega/imagen-oslo-pack4.jpg', 'noruega/imagen-oslo-pack5.jpg', 'noruega/imagen-oslo-pack6.jpg'] }
          ]
        },

        { nombre: 'BERGEN', 
          imagenFondo: 'noruega/bergen.jfif',
          imagenDetalle: 'noruega/imagen-bergen.jpg' ,
          descripcion: 'Bergen, situada en la costa suroeste de Noruega, es conocida como la "puerta de entrada a los fiordos". Rodeada de montañas y mar, combina historia hanseática, paisajes espectaculares y una atmósfera encantadora con casas de madera de colores.',
          clima: 'Oceánico',
          idioma: 'Noruego',
          moneda: 'Corona Noruega',
          puntosFuertes: ['Barrio de Bryggen', 'Mercado de pescado', 'Funicular Fløibanen', 'Naturaleza pura'],
          // PACKS DE BERGEN 
          actividades: [
            { titulo: 'Pasea por el antiguo distrito de Bryggen', descripcion: 'El muelle de Bryggen, declarado Patrimonio de la Humanidad por la UNESCO, es el símbolo de la ciudad. Sus antiguas casas de madera reflejan la época en que Bergen era un importante centro comercial de la Liga Hanseática. Hoy albergan tiendas de artesanía, galerías y pequeños museos.', textoBoton: 'Pack Bryggen', imagenes: ['noruega/imagen-bergen-1.jpg', 'noruega/imagen-bergen-2.jpg'] },
            { titulo: 'Asciende al monte Fløyen', descripcion: 'El funicular Fløibanen lleva hasta el monte Fløyen, desde donde se obtienen vistas panorámicas de la ciudad, el puerto y los fiordos. También es posible realizar rutas de senderismo por los alrededores.', textoBoton: 'Pack del Monte', imagenes: ['noruega/imagen-bergen-3.jpg', 'noruega/imagen-bergen-4.jpg'] },
            { titulo: 'Investiga los fiordos', descripcion: 'Desde Bergen parten excursiones hacia algunos de los fiordos más impresionantes de Noruega, como el Sognefjord, el más largo y profundo del país. Se pueden realizar recorridos en barco, kayak o tren panorámico.', textoBoton: 'Pack Fiordo', imagenes: ['noruega/imagen-bergen-5.jpg', 'noruega/imagen-bergen-6.jpg'] },
            { titulo: 'Conoce los museos y la cultura de la región', descripcion: 'La ciudad cuenta con el Museo Hanseático y Schøtstuene, que muestra cómo vivían los comerciantes alemanes en la Edad Media. También se puede visitar la casa del compositor Edvard Grieg, situada en las afueras.', textoBoton: 'Pack Emblema', imagenes: ['noruega/imagen-bergen-7.jpg', 'noruega/imagen-bergen-8.jpg'] },
            { titulo: 'Aprovecha la oferta del mercado de pescado', descripcion: 'El mercado del pescado de Bergen es ideal para probar productos frescos del mar, como salmón, cangrejo real y sopa de pescado tradicional.', textoBoton: 'Pack Gastronómico', imagenes: ['noruega/imagen-bergen-9.jpg', 'noruega/imagen-bergen-10.jpg'] },
            { titulo: 'Descubre la escena cultural y musical', descripcion: 'Bergen tiene una activa escena cultural con festivales de música, conciertos y eventos durante todo el año, además de una vibrante vida nocturna.', textoBoton: 'Pack de la Cultura', imagenes: ['noruega/imagen-bergen-11.jpg', 'noruega/imagen-bergen-12.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Hostales económicos', descripcion: 'Opciones accesibles para mochileros y viajeros jóvenes con habitaciones compartidas y ambiente social.', precioDesde: 35, imagenes: ['noruega/imagen-bergen-hostal1.jpg', 'noruega/imagen-bergen-hostal2.jpg'] },
            { tipo: 'Hostal privado', descripcion: 'Habitaciones privadas dentro de hostales que ofrecen mayor privacidad a un precio accesible.', precioDesde: 65, imagenes: ['noruega/imagen-bergen-hostal3.jpg', 'noruega/imagen-bergen-hostal4.jpg'] },
            { tipo: 'Hostales 3 estrellas', descripcion: 'Hoteles cómodos con servicios básicos, ideales para descansar tras explorar la ciudad y los fiordos.', precioDesde: 95, imagenes: ['noruega/imagen-bergen-hotel3.jpg', 'noruega/imagen-bergen-hotel4.jpg'] },
            { tipo: 'Hostales 4 estrellas', descripcion: 'Alojamientos de mayor calidad con instalaciones modernas, habitaciones amplias y servicios adicionales.', precioDesde: 130, imagenes: ['noruega/imagen-bergen-hotel5.jpg', 'noruega/imagen-bergen-hotel6.jpg'] },
            { tipo: 'Hostales 5 estrellas', descripcion: 'Hoteles de lujo con excelentes ubicaciones, servicios premium y alto nivel de confort.', precioDesde: 200, imagenes: ['noruega/imagen-bergen-hotel7.jpg', 'noruega/imagen-bergen-hotel8.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Económico', detallesAlojamiento: ['Hostel compartido o privado', 'Precio: 35€ – 55€'], detallesActividades: ['Paseo por el muelle de Bryggen', 'Subida al monte Fløyen (funicular)', 'Visita al Mercado de Pescado'], precioDesde: 150, imagenes: ['noruega/imagen-bergen-pack1.jpg', 'noruega/imagen-bergen-pack2.jpg'] },
            { nombre: 'Pack Fiordos & Cultura', detallesAlojamiento: ['Hotel 3 estrellas o apartamento turístico', 'Precio: 95€ – 140€'], detallesActividades: ['Tour en barco por el Sognefjord', 'Entrada al Museo Hanseático', 'Cena tradicional en el puerto'], precioDesde: 210, imagenes: ['noruega/imagen-bergen-pack3.jpg', 'noruega/imagen-bergen-pack4.jpg'] }
          ]
        },

        { 
          nombre: 'STAVANGER', 
          imagenFondo: 'noruega/stavanger.jpg',
          imagenDetalle: 'noruega/imagen-stavanger.jpg',
          descripcion: 'Stavanger es famosa por su casco antiguo de casas blancas y por ser la base para visitar el famoso Preikestolen.',
          clima: 'Templado',
          idioma: 'Noruego',
          moneda: 'Corona Noruega',
          puntosFuertes: ['Preikestolen', 'Casco antiguo blanco', 'Museo del Petróleo', 'Arte callejero'],
          // PACKS DE STAVANGER
          actividades: [
            { titulo: 'Viaja al Preikestolen', descripcion: 'Una de las experiencias más famosas es la caminata hacia el Preikestolen (El Púlpito), un imponente acantilado que se eleva unos 604 metros sobre el fiordo. La ruta es accesible para senderistas con condición física moderada y ofrece vistas inolvidables.', textoBoton: 'Pack Preikestolen', imagenes: ['noruega/imagen-stavanger-1.jpg', 'noruega/imagen-stavanger-2.jpg'] },
            { titulo: 'Explora el Lysefjord', descripcion: 'El Lysefjord es uno de los fiordos más impresionantes del país. Se pueden realizar cruceros turísticos o recorridos en kayak para admirar sus paredes verticales y cascadas.', textoBoton: 'Pack Lysefjord', imagenes: ['noruega/imagen-stavanger-3.jpg', 'noruega/imagen-stavanger-4.jpg'] },
            { titulo: 'Pasea por Gamle Stavanger', descripcion: 'El casco antiguo, conocido como Gamle Stavanger, está formado por más de 170 casas de madera blanca del siglo XVIII y XIX. Es una de las zonas mejor conservadas de Europa del Norte.', textoBoton: 'Pack Gamle Stavanger', imagenes: ['noruega/imagen-stavanger-5.jpg', 'noruega/imagen-stavanger-6.jpg'] },
            { titulo: 'Conoce museos fascinantes', descripcion: 'El Museo Noruego del Petróleo explica la importancia de la industria petrolera en el desarrollo del país. También destaca el Museo Marítimo de Stavanger, dedicado a la historia naval y comercial.', textoBoton: 'Pack Emblema', imagenes: ['noruega/imagen-stavanger-7.jpg', 'noruega/imagen-stavanger-8.jpg'] },
            { titulo: 'Goza de playas y el entorno natural', descripcion: 'A pocos kilómetros de la ciudad se encuentran playas como Sola, ideales para pasear, practicar surf o simplemente disfrutar del paisaje costero.', textoBoton: 'Pack Naturaleza', imagenes: ['noruega/imagen-stavanger-9.jpg', 'noruega/imagen-stavanger-10.jpg'] },
            { titulo: 'Degusta la comida típica', descripcion: 'Stavanger cuenta con una reconocida escena gastronómica, con restaurantes que ofrecen mariscos frescos y cocina nórdica moderna.', textoBoton: 'Pack Gastronómico', imagenes: ['noruega/imagen-stavanger-11.jpg', 'noruega/imagen-stavanger-12.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Hostales económicos', descripcion: 'Opciones asequibles muy utilizadas por viajeros que visitan el famoso Preikestolen. Ofrecen habitaciones compartidas y ambiente internacional.', precioDesde: 35, imagenes: ['noruega/imagen-bergen-hostal1.jpg', 'noruega/imagen-bergen-hostal2.jpg'] },
            { tipo: 'Hostal privado', descripcion: 'Habitaciones privadas dentro de hostales, ideales para descansar cómodamente tras un día explorando los fiordos y la costa.', precioDesde: 65, imagenes: ['noruega/imagen-bergen-hostal3.jpg', 'noruega/imagen-bergen-hostal4.jpg'] },
            { tipo: 'Hostales 3 estrellas', descripcion: 'Hoteles prácticos y bien ubicados cerca del puerto o del centro histórico, perfectos para descubrir la ciudad.', precioDesde: 95, imagenes: ['noruega/imagen-bergen-hotel3.jpg', 'noruega/imagen-bergen-hotel4.jpg'] },
            { tipo: 'Hostales 4 estrellas', descripcion: 'Alojamientos modernos con mayor confort y servicios completos, ideales para una estancia relajada en Stavanger.', precioDesde: 130, imagenes: ['noruega/imagen-bergen-hotel5.jpg', 'noruega/imagen-bergen-hotel6.jpg'] },
            { tipo: 'Hostales 5 estrellas', descripcion: 'Hoteles de lujo con instalaciones de alta gama, ubicaciones privilegiadas y servicios exclusivos para una experiencia premium.', precioDesde: 200, imagenes: ['noruega/imagen-bergen-hotel7.jpg', 'noruega/imagen-bergen-hotel8.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Económico', detallesAlojamiento: ['Hostel para senderistas', 'Precio: 35€ – 50€'], detallesActividades: ['Ruta guiada al Preikestolen', 'Paseo por Gamle Stavanger', 'Visita a las playas de Sola'], precioDesde: 105, imagenes: ['noruega/imagen-stavanger-pack1.jpg', 'noruega/imagen-stavanger-pack2.jpg'] },
            { nombre: 'Pack Aventura Premium', detallesAlojamiento: ['Hotel 4 estrellas con vistas', 'Precio: 130€ – 180€'], detallesActividades: ['Crucero privado por el Lysefjord', 'Entrada al Museo del Petróleo', 'Cena degustación marisco'], precioDesde: 245, imagenes: ['noruega/imagen-stavanger-pack3.jpg', 'noruega/imagen-stavanger-pack4.jpg'] }
          ]
        }
      ]
    },
    {
      id: 'alemania',
      nombre: 'ALEMANIA',
      imagenFondo: 'alemania/fondo-alemania.jpeg',
      eslogan: 'Un viaje a través de la historia, la cultura y la ingeniería de vanguardia.',
      tags: ['Historia', 'Cerveza', 'Castillos'],
      datosGenerales: {
        epoca: 'Mayo - Octubre',
        idioma: 'Alemán',
        moneda: 'Euro (€)'
      },
      ciudades: [
        { 
          nombre: 'BERLÍN', 
          imagenFondo: 'alemania/berlin.jpg',
          imagenDetalle: 'alemania/imagen-berlin.jpg',
          descripcion: 'Una ciudad cargada de historia, arte urbano y una vida nocturna inigualable en Europa.',
          clima: 'Continental',
          idioma: 'Alemán',
          moneda: 'Euro',
          puntosFuertes: ['Muro de Berlín', 'Puerta de Brandeburgo', 'Isla de los Museos'],
          actividades: [
            { titulo: 'Tour Historia del Muro', descripcion: 'Visita guiada por Checkpoint Charlie y el East Side Gallery. Descubre la historia de la división de Berlín.', precioDesde: 25, imagenes: ['alemania/imagen-berlin-muro1.jpg', 'alemania/imagen-berlin-checkpoint.jpg,', 'alemania/imagen-berlin-eastside.jpeg'] },
            { titulo: 'Berlín Alternativo', descripcion: 'Explora el arte urbano de Kreuzberg y mercadillos locales. Descubre la cultura joven de la ciudad.', precioDesde: 20, imagenes: ['alemania/imagen-berlin-urbano1.jpg', 'alemania/imagen-berlin-urbano2.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Lofts de diseño', descripcion: 'Espacios modernos en zonas de moda como Mitte.', precioDesde: 110, imagenes: ['alemania/imagen-berlin-loft1.jfif', 'alemania/imagen-berlin-loft2.jpg'] },
            { tipo: 'Hostales Cool', descripcion: 'Ambiente joven con DJ sets y zonas comunes.', precioDesde: 30, imagenes: ['alemania/imagen-berlin-hostal1.jpg', 'alemania/imagen-berlin-hostal2.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Histórico', detallesAlojamiento: ['Hotel 3* superior'], detallesActividades: ['Tour Muro', 'Isla Museos', 'Cena típica berlinesa'], precioDesde: 180, imagenes: ['alemania/imagen-berlin-pack1.jpg', 'alemania/imagen-berlin-pack2.jpg', 'alemania/imagen-berlin-pack3.jpg'] },
            { nombre: 'Pack Cultural', detallesAlojamiento: ['Pensión familiar'], detallesActividades: ['Crucero por el río Spree al atardecer', 'Excursión a Potsdam y sus palacios', 'Taller interactivo de cocina alemana'], precioDesde: 150, imagenes: ['alemania/imagen-berlin-pack4.jpg', 'alemania/imagen-berlin-pack5.jpg', 'alemania/imagen-berlin-pack6.jpg'] },
            { nombre: 'Pack Aventura', detallesAlojamiento: ['Pensión familiar'], detallesActividades: ['Excursión en bicicleta', 'Visita al Parque Natural', 'Cena en restaurante local'], precioDesde: 120, imagenes: ['alemania/imagen-berlin-pack7.jpg', 'alemania/imagen-berlin-pack8.jpg', 'alemania/imagen-berlin-pack9.jpg'] }
          ]
        },
        { 
          nombre: 'MÚNICH', 
          imagenFondo: 'alemania/munich.jpg',
          imagenDetalle: 'alemania/imagen-munich.jpg',
          descripcion: 'Famosa por el Oktoberfest, sus jardines de cerveza y su cercanía a los Alpes Bávaros.',
          clima: 'Continental',
          idioma: 'Alemán',
          moneda: 'Euro',
          puntosFuertes: ['Marienplatz', 'BMW Welt', 'Englischer Garten'],
          actividades: [
            { titulo: 'Tradición Bávara', descripcion: 'Vive la auténtica esencia de Múnich recorriendo sus cervecerías más emblemáticas, donde la historia y la cultura local se mezclan con el mejor ambiente. Disfruta de una experiencia gastronómica única con platos tradicionales y una inolvidable velada en la icónica Hofbräuhaus.', precioDesde: 45, imagenes: ['alemania/imagen-munich-tradicion1.jpg', 'alemania/imagen-munich-tradicion2.jpg', 'alemania/imagen-munich-tradicion3.jpg'] },
            { titulo: 'Motor y Lujo', descripcion: 'Sumérgete en el mundo de la innovación y la elegancia visitando el impresionante museo BMW, seguido de un recorrido por uno de los estadios más modernos de Europa. Una experiencia imprescindible para los amantes del motor, el diseño y la exclusividad.', precioDesde: 35, imagenes: ['alemania/imagen-munich-motor1.jpg', 'alemania/imagen-munich-motor2.jpg', 'alemania/imagen-munich-motor3.jpg'] },
            { titulo: 'Naturaleza Urbana', descripcion: 'Descubre el lado más tranquilo y verde de Múnich con un relajante paseo por el Englischer Garten, uno de los parques urbanos más grandes del mundo, y déjate sorprender por la majestuosidad y belleza del Palacio de Nymphenburg y sus jardines.', precioDesde: 30, imagenes: ['alemania/imagen-munich-naturaleza1.jpg', 'alemania/imagen-munich-naturaleza2.jpg', 'alemania/imagen-munich-naturaleza3.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Hoteles Tradicionales', descripcion: 'Decoración típica bávara en el casco antiguo.', precioDesde: 130, imagenes: ['alemania/imagen-munich-hotel1.jpg', 'alemania/imagen-munich-hotel2.jpg'] },
            { tipo: 'Pensiones Familiares', descripcion: 'Ambiente acogedor y desayuno casero incluido.', precioDesde: 70, imagenes: ['alemania/imagen-munich-pension1.jpg', 'alemania/imagen-munich-pension2.jpg'] },
            { tipo: 'Hostales Modernos', descripcion: 'Diseño contemporáneo con excelente relación calidad-precio.', precioDesde: 50, imagenes: ['alemania/imagen-munich-hostal1.jpg', 'alemania/imagen-munich-hostal2.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Oktoberfest (Todo el año)', detallesAlojamiento: ['Hotel céntrico'], detallesActividades: ['Tour Cervecerías', 'BMW Welt', 'Excursión Castillo Neuschwanstein'], precioDesde: 260, imagenes: ['alemania/imagen-munich-pack1.jpg', 'alemania/imagen-munich-pack2.jpg'] },
            { nombre: 'Pack Cultura y Naturaleza', detallesAlojamiento: ['Pensión familiar'], detallesActividades: ['Visita al Englischer Garten', 'Palacio de Nymphenburg', 'Cena tradicional'], precioDesde: 180, imagenes: ['alemania/imagen-munich-pack3.jpg', 'alemania/imagen-munich-pack4.jpg'] },
            { nombre: 'Pack Completo', detallesAlojamiento: ['Hotel de lujo'], detallesActividades: ['Tour Cervecerías', 'BMW Welt', 'Excursión Castillo Neuschwanstein', 'Cena en Hofbräuhaus'], precioDesde: 350, imagenes: ['alemania/imagen-munich-pack5.jpg', 'alemania/imagen-munich-pack6.jpg'] }
          ]
        },
        { 
          nombre: 'STUTTGART', 
          imagenFondo: 'alemania/stuttgart.jpg',
          imagenDetalle: 'alemania/imagen-stuttgart.jpg',
          descripcion: 'El corazón de la industria automotriz rodeado de colinas y viñedos.',
          clima: 'Templado',
          idioma: 'Alemán',
          moneda: 'Euro',
          puntosFuertes: ['Mercedes-Benz Museum', 'Porsche Museum', 'Viñedos de Württemberg'],
          actividades: [
            { titulo: 'Ruta del Automóvil', descripcion: 'Visita a los museos de Mercedes-Benz y Porsche.', precioDesde: 40, imagenes: ['alemania/imagen-stuttgart-actividad1.jpg', 'alemania/imagen-stuttgart-actividad2.jpg'] },
            { titulo: 'Experiencia Gastronómica', descripcion: 'Tour por los viñedos de Württemberg con degustación de vinos locales.', precioDesde: 60, imagenes: ['alemania/imagen-stuttgart-actividad3.jpg', 'alemania/imagen-stuttgart-actividad4.jpg'] },
            { titulo: 'Cultura y Naturaleza', descripcion: 'Paseo por el Schlossplatz y excursión a la Selva Negra.', precioDesde: 50, imagenes: ['alemania/imagen-stuttgart-actividad5.jpg', 'alemania/imagen-stuttgart-actividad6.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Hoteles de Lujo', descripcion: 'Servicios de primera class en el corazón de Stuttgart.', precioDesde: 150, imagenes: ['alemania/imagen-stuttgart-hotel1.jpg', 'alemania/imagen-stuttgart-hotel2.jpg'] },
            { tipo: 'Pensiones Rurales', descripcion: 'Ambiente tranquilo y vistas panorámicas.', precioDesde: 80, imagenes: ['alemania/imagen-stuttgart-pension1.jpg', 'alemania/imagen-stuttgart-pension2.jpg'] },
            { tipo: 'Hostales Modernos', descripcion: 'Diseño contemporáneo con excelente relación calidad-precio.', precioDesde: 50, imagenes: ['alemania/imagen-stuttgart-hostal1.jpg', 'alemania/imagen-stuttgart-hostal2.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Automotriz', detallesAlojamiento: ['Hotel 4*'], detallesActividades: ['Visita Museos', 'Tour Ciudad'], precioDesde: 200, imagenes: ['alemania/imagen-stuttgart-pack1.jpg', 'alemania/imagen-stuttgart-pack2.jpg'] },
            { nombre: 'Pack Naturaleza y Cultura', detallesAlojamiento: ['Pensión rural'], detallesActividades: ['Tour Viñedos', 'Excursión Selva Negra'], precioDesde: 180, imagenes: ['alemania/imagen-stuttgart-pack3.jpg', 'alemania/imagen-stuttgart-pack4.jpg'] },
            { nombre: 'Pack Completo', detallesAlojamiento: ['Hotel de lujo'], detallesActividades: ['Visita Museos', 'Tour Viñedos', 'Excursión Selva Negra'], precioDesde: 350, imagenes: ['alemania/imagen-stuttgart-pack5.jpg', 'alemania/imagen-stuttgart-pack6.jpg'] }
          ]
        }
      ]
    },
    {
      id: 'francia',
      nombre: 'FRANCIA',
      imagenFondo: 'francia/fondo-francia.jpg',
      eslogan: 'Elegancia, gastronomía de clase mundial y paisajes de ensueño.',
      tags: ['Romance', 'Arte', 'Gastronomía'],
      datosGenerales: {
        epoca: 'Abril - Octubre',
        idioma: 'Francés',
        moneda: 'Euro (€)'
      },
      ciudades: [
        { 
          nombre: 'PARÍS', 
          imagenFondo: 'francia/paris.jpg',
          imagenDetalle: 'francia/imagen-paris.jpg',
          descripcion: 'La ciudad de la luz, famosa por su gastronomía, moda y monumentos icónicos.',
          clima: 'Oceánico',
          idioma: 'Francés',
          moneda: 'Euro',
          puntosFuertes: ['Torre Eiffel', 'Louvre', 'Montmartre'],
          actividades: [
            { titulo: 'Iconos de París', descripcion: 'Subida a la Torre Eiffel y crucero por el Sena al atardecer.', precioDesde: 65, imagenes: ['francia/imagen-paris-1.jpg', 'francia/imagen-paris-2.jpg'] },
            { titulo: 'Inmersión en el Arte', descripcion: 'Entrada sin colas al Museo del Louvre y Museo de Orsay.', precioDesde: 55, imagenes: ['francia/imagen-louvre.jpg', 'francia/imagen-orsay.jpg'] },
            { titulo: 'Bohemia en Montmartre', descripcion: 'Tour a pie por el barrio de los pintores y visita al Sacré-Cœur.', precioDesde: 30, imagenes: ['francia/imagen-montmartre-1.jpg', 'francia/imagen-montmartre-2.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Hoteles Boutique', descripcion: 'Pequeños hoteles con mucho estilo en barrios históricos.', precioDesde: 120, imagenes: ['francia/imagen-paris-hotel1.jpg', 'francia/imagen-paris-hotel2.jpg'] },
            { tipo: 'Apartamentos', descripcion: 'Vive como un parisino en el Marais o el Barrio Latino.', precioDesde: 90, imagenes: ['francia/imagen-paris-apartamento1.jpg', 'francia/imagen-paris-apartamento2.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Romántico', detallesAlojamiento: ['Hotel 4* en el centro', 'Cena con vistas'], detallesActividades: ['Crucero Sena', 'Torre Eiffel', 'Tour Montmartre'], precioDesde: 290, imagenes: ['francia/imagen-paris-pack1.jpg', 'francia/imagen-paris-pack2.jpg'] },
            { nombre: 'Pack Arte y Cultura', detallesAlojamiento: ['Apartamento en el Marais'], detallesActividades: ['Entrada al Louvre', 'Museo de Orsay', 'Tour a pie por Montmartre'], precioDesde: 220, imagenes: ['francia/imagen-paris-pack3.jpg', 'francia/imagen-paris-pack4.jpg'] }
          ]
        },
        { 
          nombre: 'TOULOUSE', 
          imagenFondo: 'francia/toulouse.jpg',
          imagenDetalle: 'francia/imagen-toulouse.jpg',
          descripcion: 'La "Ciudad Rosa", conocida por su arquitectura de ladrillo y su importancia en la industria aeroespacial.',
          clima: 'Mediterráneo',
          idioma: 'Francés',
          moneda: 'Euro',
          puntosFuertes: ['Cité de l\'Espace', 'Capitole', 'Canal del Midi'],
          actividades: [
            { titulo: 'Aventura Espacial', descripcion: 'Visita completa a la Cité de l\'Espace, el parque temático del espacio.', precioDesde: 26, imagenes: ['francia/imagen-toulouse-1.jpg', 'francia/imagen-toulouse-2.jpg'] },
            { titulo: 'Paseo por el Canal', descripcion: 'Alquiler de bicis o paseo en barco por el Canal del Midi.', precioDesde: 20, imagenes: ['francia/imagen-toulouse-3.jpg', 'francia/imagen-toulouse-4.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Hoteles Modernos', descripcion: 'Cerca de la plaza del Capitole con todas las comodidades.', precioDesde: 85, imagenes: ['francia/imagen-toulouse-hotel1.jpg', 'francia/imagen-toulouse-hotel2.jpg'] },
            { tipo: 'Hostales con encanto', descripcion: 'Edificios históricos rehabilitados para viajeros.', precioDesde: 45, imagenes: ['francia/imagen-toulouse-hostal1.jpg', 'francia/imagen-toulouse-hostal2.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Tecnológico', detallesAlojamiento: ['Hotel 3* céntrico'], detallesActividades: ['Cité de l\'Espace', 'Tour Airbus', 'Museo Aeroscopia'], precioDesde: 150, imagenes: ['francia/imagen-toulouse-pack1.jpg', 'francia/imagen-toulouse-pack2.jpg'] }
          ]
        },
        { 
          nombre: 'NIZA', 
          imagenFondo: 'francia/niza.jpg', 
          imagenDetalle: 'francia/imagen-niza.jpg',
          descripcion: 'La ciudad costera de la Riviera Francesa, famosa por sus playas, su arquitectura y su ambiente vibrante.',
          clima: 'Mediterráneo',
          idioma: 'Francés',
          moneda: 'Euro',
          puntosFuertes: ['Playa de la Côte d\'Azur', 'Catedral de Niza', 'Mercado de Niza'],
          actividades: [
            { titulo: 'Relax en la Riviera', descripcion: 'Paseo por la costa y degustación de platos locales.', precioDesde: 35, imagenes: ['francia/imagen-niza-1.jpg', 'francia/imagen-niza-2.jpg'] },
            { titulo: 'Exploración Histórica', descripcion: 'Visita a la Catedral y al Mercado Central.', precioDesde: 25, imagenes: ['francia/imagen-niza-3.jpg', 'francia/imagen-niza-4.jpg'] }
          ],
          alojamientos: [
            { tipo: 'Hoteles de Lujo', descripcion: 'Hoteles con vistas al mar y servicios premium.', precioDesde: 150, imagenes: ['francia/imagen-niza-hotel1.jpg', 'francia/imagen-niza-hotel2.jpg'] },
            { tipo: 'Apartamentos', descripcion: 'Vive como un local en el corazón de Niza.', precioDesde: 100, imagenes: ['francia/imagen-niza-apartamento1.jpg', 'francia/imagen-niza-apartamento2.jpg'] }
          ],
          packsConjuntos: [
            { nombre: 'Pack Relajante', detallesAlojamiento: ['Hotel 4* con vistas'], detallesActividades: ['Paseo por la costa', 'Visita a la Catedral', 'Degustación de vinos'], precioDesde: 280, imagenes: ['francia/imagen-niza-pack1.jpg', 'francia/imagen-niza-pack2.jpg'] }
          ]
        }

      ]
    }
  ];

  

  constructor() { }
  // Método para obtener la lista completa de países
  getPaises(): Pais[] {
    return this.paises;
  }

  // Método para obtener los datos de un país por su id
  getPaisPorId(id: string): Pais | undefined {
    return this.paises.find(p => p.id === id);
  }
  
}
