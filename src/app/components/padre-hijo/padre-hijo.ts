
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ObjetoHalloween } from '../tarjeta-halloween/objeto-halloween';
import { TarjetaHalloweenComponent } from '../tarjeta-halloween/tarjeta-halloween';

@Component({
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, TarjetaHalloweenComponent],
  selector: 'app-padre-hijo',
  styleUrl: './padre-hijo.css',
  templateUrl: './padre-hijo.html',
})
export class PadreHijo {

  formularioHalloween = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    objeto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    propietario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
  });

  objetosHalloween: ObjetoHalloween[] = [];

  enviar() {
    if (this.formularioHalloween.valid) {

      const nuevoObjeto: ObjetoHalloween = {
        imagen: this.formularioHalloween.value.imagen || '',
        objeto: this.formularioHalloween.value.objeto || '',
        descripcion: this.formularioHalloween.value.descripcion || '',
        propietario: this.formularioHalloween.value.propietario || ''
      };

      this.objetosHalloween.push(nuevoObjeto);
      this.formularioHalloween.reset();
    }
  }

  enviar(inputImagen: HTMLInputElement): void {
    if (this.formularioHalloween.invalid) {
      this.formularioHalloween.markAllAsTouched();
      return;
    }

    const { imagen, objeto, descripcion, propietario } = this.formularioHalloween.getRawValue();
    this.objetosHalloween.push({imagen: imagen ?? '', objeto: objeto ?? '', descripcion: descripcion ?? '', propietario: propietario ?? ''});
    this.formularioHalloween.reset();
    inputImagen.value = '';
  }

  eliminarObjeto(objeto: ObjetoHalloween): void {
    const index = this.objetosHalloween.indexOf(objeto);
    if (index !== -1) {
      this.objetosHalloween.splice(index, 1);
    }
  }

}
