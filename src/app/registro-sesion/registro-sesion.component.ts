import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  standalone: true,
  imports: [
    IonicModule,
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./registro-sesion.component.scss']
})
export class RegistroSesionComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  // Validador para verificar si las contraseñas coinciden
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);
      // Procesa los datos del formulario aquí
    } else {
      console.log('Formulario inválido');
    }
  }
}
