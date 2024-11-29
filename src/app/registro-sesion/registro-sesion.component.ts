import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonContent, IonInput, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  standalone: true,
  imports: [
    IonInput,
    IonLabel,
    ReactiveFormsModule,
    IonContent
  ],
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): any {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);
    } else {
      console.log('Formulario inválido.');
    }
  }
}
