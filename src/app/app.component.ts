import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {RouterOutlet} from '@angular/router'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecolocoFrontend';
}
