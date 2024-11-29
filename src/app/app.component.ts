import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import { EventosComponent} from './eventos/eventos.component';
import {GestionComponent} from './gestion/gestion.component';
import {PerfilComponent} from './perfil/perfil.component';
import {CreacionEventoComponent} from './creacion-evento/creacion-evento.component';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    QuienesSomosComponent,
    RegistroSesionComponent,
    InicioSesionComponent,
    EventosComponent,
    GestionComponent,
    PerfilComponent,
    CreacionEventoComponent,
  ], // Incluye todos los componentes standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecolocoFrontend';
}

