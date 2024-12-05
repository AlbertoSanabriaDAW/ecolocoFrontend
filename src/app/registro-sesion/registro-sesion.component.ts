import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Registro } from '../modelos/registro';
import { RegistroService } from '../services/registro.service';
import { NgIf } from '@angular/common';

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
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fechaNacimiento: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}[A-Za-z]$')]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  onSubmit(): void {
    console.log('Botón de registro presionado');
    if (this.registerForm.valid) {
      console.log('Formulario enviado');
      const registro: Registro = {
        username: this.registerForm.value.username || '',
        email: this.registerForm.value.email || '',
        password: this.registerForm.value.password || '',
      };

      const perfil = {
        nombre: this.registerForm.value.nombre || '',
        apellido: this.registerForm.value.apellidos || '', // Changed from 'apellidos' to 'apellido'
        telefono: this.registerForm.value.telefono || '',
        fechaNacimiento: this.registerForm.value.fechaNacimiento || '',
        dni: this.registerForm.value.dni || '',
      }

      // Asegúrate de que registrarUsuario retorne un Observable
      this.registroService.registrarUsuario(registro).subscribe(
        response => {
          console.log('Registro exitoso', response);
          // Redirigir a la página de inicio de sesión
        },
        error => {
          console.error('Mensaje al registrar', error);
          // Mostrar mensaje de error
        }
      );

      // Asegúrate de que registrarPerfil retorne un Observable
      this.registroService.regisrarPerfil(perfil).subscribe(
        response => {
          console.log('Perfil registrado', response);
          // Redirigir a la página de inicio de sesión
        },
        error => {
          console.error('Mensaje al registrar perfil', error);
          // Mostrar mensaje de error
        }
      );

    } else {
      console.error('Formulario inválido', this.registerForm.errors);
    }
  }
}
