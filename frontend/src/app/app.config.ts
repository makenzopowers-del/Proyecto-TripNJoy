import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient, withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Proporciona los listeners globales de errores para el navegador
    provideZonelessChangeDetection(), // Habilita la detección de cambios sin zona para mejorar el rendimiento
    provideRouter(routes), // Proporciona el enrutador con las rutas definidas en app.routes.ts
    provideClientHydration(withEventReplay()), // Habilita la hidratación del cliente con reproducción de eventos para mejorar la experiencia del usuario
    provideHttpClient(withFetch()) // Proporciona el cliente HTTP utilizando la API Fetch para realizar solicitudes HTTP de manera eficiente
  ]
};
