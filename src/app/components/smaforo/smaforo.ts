import { Component, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-smaforo',
  styleUrl: './smaforo.css',
  templateUrl: './smaforo.html',
})
export class Smaforo {

contador = signal(0);
color = signal('black');
peso = signal('bold');


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
