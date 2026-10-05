import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {

  items = ['Pan', 'Nozilla', 'Arroz', 'Fruta', 'Leche'];
}
