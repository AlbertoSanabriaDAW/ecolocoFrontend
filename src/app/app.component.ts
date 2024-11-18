import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, QuienesSomosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecolocoFrontend';
}
