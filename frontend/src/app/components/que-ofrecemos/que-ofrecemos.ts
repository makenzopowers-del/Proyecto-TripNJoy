import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-que-ofrecemos',
  standalone: true,
  templateUrl: './que-ofrecemos.html',
  styleUrl: './que-ofrecemos.css',
})
export class QueOfrecemos {

  @Output() abrirLoginModal = new EventEmitter<void>();
  @Output() abrirRegistroModal = new EventEmitter<void>();

  abrirLogin() {
    this.abrirLoginModal.emit();
  }

  abrirRegistro() {
    this.abrirRegistroModal.emit();
  }
}
