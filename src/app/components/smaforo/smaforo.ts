import { Component, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-smaforo',
  styleUrl: './smaforo.css',
  templateUrl: './smaforo.html',
})
export class Smaforo {

contador = signal(0);

incrementar() {
  this.contador.update(valor => valor + 1);
}

decrementar() {
  this.contador.update(valor => valor - 1);
}

resetear() {
  this.contador.set(0);
}

}
