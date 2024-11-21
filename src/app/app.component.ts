import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {InicioComponent} from './inicio/inicio.component';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import {RegistroSesionComponent} from './registro-sesion/registro-sesion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent, FooterComponent, InicioComponent, QuienesSomosComponent, RegistroSesionComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecolocoFrontend';
}
