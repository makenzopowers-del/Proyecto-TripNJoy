import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { PlanViaje1 } from './components/plan-viaje-1/plan-viaje-1'; 
import { QueOfrecemos } from './components/que-ofrecemos/que-ofrecemos';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Login, Registro, PlanViaje1, QueOfrecemos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'tripandjoy2';
  isLoginVisible: boolean = false;
  isPlanViajeVisible = false;
  isRegistroVisible: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    // Escuchamos si alguien hace clic en la 'v' de inicio
    this.modalService.abrirPlanViaje.subscribe(() => {
      this.isPlanViajeVisible = true;
    });

    // Escuchamos si alguien hace clic en el botón de login
    this.modalService.abrirLogin.subscribe(() => {
      this.isLoginVisible = true;
    });

    // Escuchamos si alguien hace clic en el botón de registro
    this.modalService.abrirRegistro.subscribe(() => {
      this.isRegistroVisible = true;
    });
  }


}
