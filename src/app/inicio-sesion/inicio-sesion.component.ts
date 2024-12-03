import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, IonicModule],
})
export class InicioSesionComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.loginService.login(username, password).subscribe({
        next: (response) => {
          //Aqui se guarda el token de autenticación
          localStorage.setItem('authToken', response.token); //Asegurar que el backend devuelva un token
          this.router.navigate(['/']); // Redirigir al inicio
        },
        error: (error) => {
          console.error('Error al iniciar sesión', error);
          alert('Usuario o contraseña incorrectos');
        }
      });
    }
  }
}
