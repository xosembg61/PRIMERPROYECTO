
import { Component, Input } from '@angular/core';
import { ObjetoHalloween } from './objeto-halloween';

@Component({
  selector: 'app-tarjeta-halloween',
  standalone: true,
  templateUrl: './tarjeta-halloween.html',
  styleUrl: './tarjeta-halloween.css'
})
export class TarjetaHalloweenComponent {

  @Input() objeto!: ObjetoHalloween;

}
