import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import {EventosComponent} from './eventos/eventos.component';
import {ContactoComponent} from './contacto/contacto.component';
import {GestionComponent} from './gestion/gestion.component';
import {CreacionEventoComponent} from './creacion-evento/creacion-evento.component';
import {PerfilComponent} from './perfil/perfil.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Página principal
  { path: 'quienes-somos', component: QuienesSomosComponent }, // Página "Quiénes somos"
  { path: 'registro', component: RegistroSesionComponent }, // Página de registro
  { path: 'inicioSesion', component: InicioSesionComponent }, // Página de registro
  { path: 'inicio', component: InicioComponent}, // Página Inicio
  { path: 'eventos', component: EventosComponent}, //Página Eventos
  { path: 'contacto', component: ContactoComponent},
  { path: 'gestion', component: GestionComponent},
  { path: 'creacionEvento', component: CreacionEventoComponent},
  { path: 'perfil', component: PerfilComponent},

];
