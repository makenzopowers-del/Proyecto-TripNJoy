import { Component } from '@angular/core';
import { PerfilCliente } from '../perfil-cliente/perfil-cliente';
import { PerfilAdmin } from '../perfil-admin/perfil-admin';
import { Auth } from '../../services/auth';

@Component({
  standalone: true,
  imports: [PerfilAdmin, PerfilCliente],
  templateUrl: './perfil.html'
})
export class Perfil {
  constructor(public auth: Auth) {}
}
