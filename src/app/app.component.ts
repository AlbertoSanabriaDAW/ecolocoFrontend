import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';

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
  ], // Incluye todos los componentes standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecolocoFrontend';
}

