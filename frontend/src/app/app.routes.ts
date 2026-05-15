import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login'; 
import { Registro } from './components/registro/registro';
import { QueOfrecemos } from './components/que-ofrecemos/que-ofrecemos';
import { Valoraciones } from './components/valoraciones/valoraciones';
import { PaisDetalle } from './components/pais-detalle/pais-detalle';
import { CiudadDetalle } from './components/ciudad-detalle/ciudad-detalle';
import { adminGuard } from './guards/admin-guard';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { GestionarActividades } from './gestionar-actividades/gestionar-actividades';
import { AdministrarUsuarios } from './administrar-usuarios/administrar-usuarios';
import { GestionarAlojamientos } from './gestionar-alojamientos/gestionar-alojamientos';
import { ServiciosPrimarios } from './servicios-primarios/servicios-primarios';
import { PacksActividades } from './packs-actividades/packs-actividades';
import { PacksConjuntos } from './packs-conjuntos/packs-conjuntos';
import { PacksAlojamientos } from './packs-alojamientos/packs-alojamientos';
import { Personalizar } from './components/personalizar/personalizar';
import { Pago } from './components/pago/pago';
import { Perfil } from './components/perfil/perfil';
import { PoliticaDevoluciones } from './politica-devoluciones/politica-devoluciones';
import { PoliticaPrivacidad } from './politica-privacidad/politica-privacidad';
import { AvisoLegal } from './aviso-legal/aviso-legal';

export const routes: Routes = [
    { path: '', component: Home }, // Página de inicio      
    { path: 'login', component: Login }, // Página de login (modal)
    { path: 'registro', component: Registro }, // Página de registro
    { path: 'que-ofrecemos', component: QueOfrecemos }, // Página de "Qué ofrecemos"
    { path: 'valoraciones', component: Valoraciones }, // Página de valoraciones
    { path: 'pais/:nombre', component: PaisDetalle }, // Página de detalle de país
    { path: 'pais/:paisId/ciudad/:ciudadNombre', component: CiudadDetalle }, // Página de detalle de ciudad

    
    // --- RUTAS DEL ADMIN ---
    { path: 'admin', component: AdminDashboard, canActivate: [adminGuard] }, // Panel de control del admin (con guardia)
    { path: 'admin/actividades', component: GestionarActividades }, // Página para gestionar actividades
    { path: 'admin/usuarios', component: AdministrarUsuarios }, // Página para administrar usuarios
    { path: 'admin/alojamientos', component: GestionarAlojamientos }, // Página para gestionar alojamientos
    { path: 'admin/servicios-primarios', component: ServiciosPrimarios }, // Página para gestionar servicios primarios
    
    // --- RUTAS DE PACKS ---
    { path: 'pais/:paisId/ciudad/:ciudadNombre/actividades', component: PacksActividades }, // Página para ver actividades de una ciudad
    { path: 'pais/:paisId/ciudad/:ciudadNombre/alojamientos', component: PacksAlojamientos}, // Página para ver alojamientos de una ciudad
    { path: 'pais/:paisId/ciudad/:ciudadNombre/conjuntos', component: PacksConjuntos }, // Página para ver conjuntos de una ciudad
    
    // --- RUTAS DE PERSONALIZACIÓN Y PAGO ---
    { path: 'personalizar', component: Personalizar }, // Página para personalizar un pack
    { path: 'pago', component: Pago }, // Página para realizar el pago de un pack
    { path: 'perfil', component: Perfil}, // Página para ver y editar el perfil del usuario

    // --- RUTA ENLACES DEL FOOTER ---
    { path: 'aviso-legal', component: AvisoLegal },
    { path: 'politica-privacidad', component: PoliticaPrivacidad },
    { path: 'politica-devoluciones', component: PoliticaDevoluciones },

    { path: '**', redirectTo: '' } // Redirige cualquier ruta desconocida a la página de inicio
];
