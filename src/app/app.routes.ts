import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Página principal
  { path: 'quienes-somos', component: QuienesSomosComponent }, // Página "Quiénes somos"
  { path: 'registro', component: RegistroSesionComponent }, // Página de registro
];
