import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModeService {

  readonly modo = signal(false);

  cambiar() {
    this.modo.update(valor => !valor);
    document.documentElement.classList.toggle('modo-oscuro', this.modo());
  }

}
