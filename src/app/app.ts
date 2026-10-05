import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Smaforo } from './components/smaforo/smaforo';
import { Calculadora } from './components/calculadora/calculadora';
import { Lista } from './components/lista/lista';

@Component({
  imports: [RouterOutlet, Smaforo, Calculadora, Lista],
  selector: 'app-root',
  styleUrl: './app.css',      
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('PrimerProyecto');
}
