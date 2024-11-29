import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-creacion-evento',
  templateUrl: './creacion-evento.component.html',
  styleUrls: ['./creacion-evento.component.css'],
  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class CreacionEventoComponent {
  eventoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventoForm = this.fb.group({
      titulo: ['', Validators.required], // Único campo obligatorio
      foto: [''], // Opcional
      descripcion: [''], // Opcional
      fecha: [''], // Opcional
      ubicacion: [''], // Opcional
      aptitudes: [''], // Opcional
    });
  }

  onSubmit() {
    if (this.eventoForm.valid) {
      console.log('Evento Guardado:', this.eventoForm.value);
      alert('Evento guardado exitosamente');
    } else {
      alert('Por favor completa el título del evento.');
    }
  }
}
