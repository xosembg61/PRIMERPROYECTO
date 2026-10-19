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
    new Fruta("Pan", false, "images/Pan.jpg"),
    new Fruta("Nocilla", true, "images/Nocilla.jpg"),
    new Fruta("Arroz", false, "images/Arroz.jpg"),
    new Fruta("Manzana", true, "images/Manzana.jpg"),
    new Fruta("Leche", false, "images/Leche.jpg")
  ];

  personajes:Personaje[] = [
    new Personaje("Mario", "images/Mario.jpg", 35, "Plomero"),
    new Personaje("Luigi", "images/Luigi.jpg", 32, "Hermano de Mario"),
    new Personaje("Peach", "images/Peach.jpg", 28, "Princesa del Reino Champiñón"),
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

class Personaje {
  nombre: string;
  imagen: string;
  edad: number;
  descripcion: string;

  constructor(nombre: string, imagen: string, edad: number, descripcion: string) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.edad = edad;
    this.descripcion = descripcion;
  }
}



