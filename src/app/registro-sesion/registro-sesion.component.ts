import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Registro } from '../modelos/registro';
import { RegistroService } from '../services/registro.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css'],
  standalone: true,
  imports: [RouterModule, IonicModule, ReactiveFormsModule, NgIf],
})
export class RegistroSesionComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private registroService: RegistroService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {validators: this.passwordMatchValidator});
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : {mismatch: true};
  }

  onSubmit(): void {
    console.log('Botón de registro presionado');
    if (this.registerForm.valid) {
      console.log('Formulario enviado');
      const registro: Registro = {
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };

      // Asegúrate de que registrarUsuario retorne un Observable
      this.registroService.registrarUsuario(registro).subscribe(
        response => {
          console.log('Registro exitoso', response);
          // Redirigir a la página de inicio de sesión
        },
        error => {
          console.error('Error al registrar', error);
          // Mostrar mensaje de error
        }
      );
    } else {
      console.error('Formulario inválido', this.registerForm.errors);
    }
  }
}
