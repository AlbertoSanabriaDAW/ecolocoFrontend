import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {IonButton} from '@ionic/angular/standalone';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true,
  imports: [RouterModule, IonButton, NgIf],
})
export class InicioComponent {
  token: string = localStorage.getItem('authenticationtoken') || '';
  constructor(private router: Router) {}

  onRegisterClick(): void {
    // location.href = '/registro';
    this.router.navigate(['/registro']);
  }

  onLoginClick(): void {
    // location.href = '/inicioSesion';
    this.router.navigate(['/inicioSesion']);
  }

  onLogoutClick() {
    // location.href = '/logout';
    localStorage.removeItem('authenticationtoken');
    this.token = '';
    this.router.navigate(['/']);
  }
}
