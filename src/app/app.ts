import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ModeService } from './services/mode-service';

@Component({
  imports: [RouterLink, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  selector: 'app-root',
  styleUrl: './app.css',      
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('PrimerProyecto');
  protected readonly modeService = inject(ModeService);
}
