import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Smaforo } from './components/smaforo/smaforo';
import { Calculadora } from './calculadora/calculadora';

@Component({
  imports: [RouterOutlet, Smaforo, Calculadora],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('PrimerProyecto');
}
