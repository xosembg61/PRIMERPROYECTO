import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-halloween',
  styleUrl: './formulario-halloween.css',
  templateUrl: './formulario-halloween.html',
})
export class FormularioHalloween {

formularioHalloween = new FormGroup({
  nombre: new FormControl('', { validators: [Validators.required,Validators.minLength(3),Validators.maxLength(50)] }),
  email: new FormControl('', { validators: [Validators.required, Validators.email] }),
  edad: new FormControl('', { validators: [Validators.required, Validators.min(0),Validators.max(150)] }),
  });

enviar(){
  console.log(this.formularioHalloween.value);
  console.log(" ");
  console.log(this.formularioHalloween.get('nombre')?.value);
  console.log(this.formularioHalloween.get('email')?.value);
  console.log(this.formularioHalloween.get('edad')?.value);

  const nombre = this.formularioHalloween.get('nombre')?.value;
  const email = this.formularioHalloween.get('email')?.value;
  const edad = this.formularioHalloween.get('edad')?.value;
}

}


