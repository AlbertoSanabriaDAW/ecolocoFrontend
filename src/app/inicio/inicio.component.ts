import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {IonButton} from '@ionic/angular/standalone';
import {NgIf} from '@angular/common';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true,
  imports: [RouterModule, IonButton, NgIf],
})
export class InicioComponent implements OnInit {
  token: string = localStorage.getItem('authenticationtoken') || '';
  isAuthenticated: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getAuthStatus().subscribe(status => {
      this.isAuthenticated = status;
    });

    //Inicializa el estado de autenticación
    this.isAuthenticated = this.loginService.isAuthenticated();
  }


  onRegisterClick(): void {
    // location.href = '/registro';
    this.router.navigate(['/registro']);
  }

  onLoginClick(): void {
    // location.href = '/inicioSesion';
    this.router.navigate(['/inicioSesion']);
  }

  onLogoutClick() {
    this.loginService.logout();
  }
}
