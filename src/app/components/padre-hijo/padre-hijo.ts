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
    imagen: new FormControl('', { validators: [Validators.required] }),
    objeto: new FormControl('', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]}),
    descripcion: new FormControl('', { validators: [Validators.required, Validators.minLength(10)]}),
    propietario: new FormControl('', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]}),
  });

  objetosHalloween: ObjetoHalloween[] = [];

  seleccionarImagen(event: Event): void {
    const input = event.target;
    const archivo = input instanceof HTMLInputElement ? input.files?.[0] : undefined;

    if (!archivo || !archivo.type.startsWith('image/')) {
      this.formularioHalloween.controls.imagen.setValue('');
      return;
    }

    const lector = new FileReader();
    lector.onload = () => {
      this.formularioHalloween.controls.imagen.setValue(
        typeof lector.result === 'string' ? lector.result : '',
      );
    };
    lector.onerror = () => this.formularioHalloween.controls.imagen.setValue('');
    lector.readAsDataURL(archivo);
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
