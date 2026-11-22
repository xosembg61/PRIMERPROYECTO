
import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-clicker',
  styleUrl: './clicker.css',
  templateUrl: './clicker.html',
})
export class Clicker {

  puntos = signal(0);
  multiplicador = signal(1);
  autoclickerComprado = signal(false);
  autoclickerActivado = signal(false);
  GameOver = signal(false);

  niveles = [1, 5, 10, 50, 100, 250, 500];

  hacerClick() {

    if (this.GameOver()) {
      return;
    }

    this.puntos.update(valor => valor + this.multiplicador());

    this.comprobarVictoria();
  }

  comprarMultiplicador(nuevo: number, precio: number) {

    const indice = this.niveles.indexOf(this.multiplicador());
    const siguiente = this.niveles[indice + 1];

    if (
      this.puntos() >= precio &&
      nuevo === siguiente &&
      !this.GameOver()
    ) {

      this.puntos.update(valor => valor - precio);
      this.multiplicador.set(nuevo);

      this.comprobarVictoria();
    }
  }

  comprarAutoclicker(precio: number) {

    if (
      this.puntos() >= precio &&
      !this.autoclickerComprado() &&
      !this.GameOver()
    ) {

      this.puntos.update(valor => valor - precio);
      this.autoclickerComprado.set(true);

      this.comprobarVictoria();

      if (!this.GameOver()) {
        this.autoclickerActivado.set(true);
        this.iniciarAutoclicker();
      }
    }
  }

  iniciarAutoclicker() {

    setTimeout(() => {

      if (this.autoclickerActivado() && !this.GameOver()) {

        this.puntos.update(
          valor => valor + (10 * this.multiplicador())
        );

        this.comprobarVictoria();

        if (!this.GameOver()) {
          this.iniciarAutoclicker();
        }
      }

    }, 1000);
  }

  comprobarVictoria() {

    if (
      this.multiplicador() === 500 &&
      this.autoclickerComprado() &&
      this.puntos() >= 250000
    ) {

      this.GameOver.set(true);
      this.autoclickerActivado.set(false);
    }
  }

  reiniciarJuego() {

    this.autoclickerActivado.set(false);

    this.puntos.set(0);
    this.multiplicador.set(1);
    this.autoclickerComprado.set(false);
    this.GameOver.set(false);
  }

  ngOnDestroy() {
    this.autoclickerActivado.set(false);
  }
}
