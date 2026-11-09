
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ObjetoHalloween } from './objeto-halloween';

@Component({
  standalone: true,
  selector: 'app-tarjeta-halloween',
  templateUrl: './tarjeta-halloween.html',
  styleUrl: './tarjeta-halloween.css',
})
export class TarjetaHalloweenComponent {

  @Input({ required: true }) objeto!: ObjetoHalloween;

  @Output() eliminar = new EventEmitter<ObjetoHalloween>();

  solicitarEliminacion(): void {
    this.eliminar.emit(this.objeto);
  }

}
