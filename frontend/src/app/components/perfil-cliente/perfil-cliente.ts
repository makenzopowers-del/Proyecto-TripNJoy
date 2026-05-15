import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-perfil-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-cliente.html',
  styleUrl: './perfil-cliente.css',
})
export class PerfilCliente implements OnInit {
  user: Usuario | null = null;

  constructor(private auth: Auth) {}

  ngOnInit() {
    // Al cargar el componente, obtenemos el usuario actual del servicio de autenticación
    this.user = this.auth.getUsuarioActual();
  }
}
