import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, IonicModule],
})
export class RegistroSesionComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Formulario enviado:', this.registerForm.value);
    }
  }
}
