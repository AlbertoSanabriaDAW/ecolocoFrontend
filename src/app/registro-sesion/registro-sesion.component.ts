import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonButton, IonContent, IonInput, IonLabel, IonNote} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  standalone: true,
  imports: [
    IonNote,
    IonInput,
    IonLabel,
    ReactiveFormsModule,
    IonContent,
    IonButton
  ],
  styleUrls: ['./registro-sesion.component.scss']
})
export class RegistroSesionComponent {
  registerForm: FormGroup; // Definición de registerForm

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario
    this.registerForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator, // Validador personalizado para las contraseñas
      });
  }

  // Validador personalizado para verificar que las contraseñas coincidan
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
// comentario del botón funcional de registrarse que da fallos:
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
//
// @Component({
//   selector: 'app-registro-sesion',
//   templateUrl: './registro-sesion.component.html',
//   styleUrls: ['./registro-sesion.component.scss'],
//   standalone: true,
//   imports: [CommonModule, IonicModule],
// })
// export class RegistroSesionComponent {
//   registerForm: FormGroup;
//
//   constructor(private fb: FormBuilder) {
//     this.registerForm = this.fb.group(
//       {
//         username: ['', [Validators.required, Validators.minLength(3)]],
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirmPassword: ['', Validators.required],
//       },
//       { validators: this.passwordMatchValidator }
//     );
//   }
//
//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { passwordMismatch: true };
//   }
//
//   onSubmit() {
//     if (this.registerForm.valid) {
//       console.log('Datos del formulario:', this.registerForm.value);
//       alert('¡Registro exitoso!');
//     } else {
//       alert('Por favor, completa todos los campos correctamente.');
//     }
//   }
// }
