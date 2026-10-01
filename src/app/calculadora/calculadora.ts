import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {

  resultado = signal(0);

  select_final1 = signal(0);
  select_final2 = signal(0);

  boton_selected_1 = signal(0);
  boton_selected_2 = signal(0);

  hueco_seleccionado = signal(1);

  boton1_final() {
    this.select_final1.set(this.boton_selected_1());
  }

  boton2_final() {
    this.select_final2.set(this.boton_selected_2());
  }

  boton(valor: number) {

  if (this.hueco_seleccionado() == 1) {
    this.boton_selected_1.set(valor);
    this.select_final1.set(valor);
  }

  if (this.hueco_seleccionado() == 2) {
    this.boton_selected_2.set(valor);
    this.select_final2.set(valor);
  }

  }

  sumar() {
    this.resultado.set(this.select_final1() + this.select_final2());
  }

  restar() {
    this.resultado.set(this.select_final1() - this.select_final2());
  }

  multiplicar() {
    this.resultado.set(this.select_final1() * this.select_final2());
  }

  dividir() {
    if (this.select_final2() == 0) {
      this.resultado.set(0);
    } else {
      this.resultado.set(this.select_final1() / this.select_final2());
    }
  }

}