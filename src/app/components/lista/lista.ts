import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {

  items:string[] = ['Pan', 'Nocilla', 'Arroz', 'Fruta', 'Leche'];


  lista:Fruta[] = [
    new Fruta("Pan", false, "/images/Pan.jpg"),
    new Fruta("Nocilla", true, "/images/Nocilla.jpg"),
    new Fruta("Arroz", false, "/images/Arroz.jpg"),
    new Fruta("Manzana", true, "/images/Manzana.jpg"),
    new Fruta("Leche", false, "/images/Leche.jpg")
  ];

}

class Fruta  {

  nombre: string;
  like: boolean;
  imagen: string = "";

  constructor(nombre: string, like: boolean, imagen: string) {
    this.nombre = nombre;
    this.like = like;
    this.imagen = imagen;
  }

}

