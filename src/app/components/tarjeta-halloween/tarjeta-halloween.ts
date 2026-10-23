import { Component, Input } from '@angular/core';
import { ObjetoHalloween } from './objeto-halloween';

@Component({
  standalone: true,
  selector: 'app-tarjeta-halloween',
  templateUrl: './tarjeta-halloween.html',
  styleUrl: './tarjeta-halloween.css',
})
export class TarjetaHalloweenComponent {
  @Input({ required: true }) objeto!: ObjetoHalloween;
}