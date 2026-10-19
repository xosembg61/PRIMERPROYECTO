import { Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-smaforo',
  styleUrl: './smaforo.css',
  templateUrl: './smaforo.html',
})
export class Smaforo {

contador = signal(0);
color = signal('black');
peso = signal('bold');
cint = [1,2,3,4,5];


incrementar() {
  this.contador.update(valor => valor + 1);
  this.revisarColor();
}

decrementar() {
  this.contador.update(valor => valor - 1);
  this.revisarColor();
}

resetear() {
  this.contador.set(0);
  this.color.set('black');
}

revisarColor() {
  if (this.contador() < 0) {
    this.color.set('red');
  } else if (this.contador() > 0) {
    this.color.set('green');
  } else {
    this.color.set('black');
  }
}



}
