import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { Lista } from './components/lista/lista';
import { Smaforo } from './components/smaforo/smaforo';
import { FormularioHalloween } from './components/formulario-halloween/formulario-halloween';

export const routes: Routes = [
	/*{ path: '', redirectTo: 'lista', pathMatch: 'full' },*/
	{ path: 'lista', component: Lista },
	{ path: 'calculadora', component: Calculadora },
	{ path: 'smaforo', component: Smaforo },
	{ path: 'formulario-halloween', component: FormularioHalloween },
];
