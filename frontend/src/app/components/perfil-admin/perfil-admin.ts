import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-perfil-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-admin.html',
  styleUrl: './perfil-admin.css',
})
export class PerfilAdmin implements OnInit {

  admin: any = null;

  constructor(private auth: Auth) {}

  ngOnInit() {
    this.admin = this.auth.getUsuarioActual();
  }
}
