import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importar Ionic para standalone

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.scss'],
  standalone: true, // Declarar como componente independiente
  imports: [CommonModule, ReactiveFormsModule, IonicModule], // Importar los módulos necesarios
})
export class RegistroSesionComponent {
  registerForm: FormGroup; // Declarar el formulario reactivo

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Validador personalizado para confirmar contraseñas
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);
      alert('¡Registro exitoso!');
    } else {
      console.log('Formulario inválido');
    }
  }
}
