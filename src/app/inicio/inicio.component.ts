import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true,
  imports: [RouterModule, IonButton],
})
export class InicioComponent {
  token: string = localStorage.getItem('authToken') || '';
  constructor(private router: RouterModule) {}

  onRegisterClick(): void {
    location.href = '/registro';
  }

  onLoginClick(): void {
    location.href = '/inicioSesion';
  }
}
