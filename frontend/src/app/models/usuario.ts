export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol?: 'cliente' | 'administrador' | 'admin';
}