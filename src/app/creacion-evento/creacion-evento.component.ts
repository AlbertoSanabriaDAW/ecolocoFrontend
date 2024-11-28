import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonContent, IonDatetime, IonInput, IonLabel, IonTextarea} from "@ionic/angular/standalone";

@Component({
  selector: 'app-creacion-evento',
  templateUrl: './creacion-evento.component.html',
  styleUrls: ['./creacion-evento.component.css'],
  imports: [
    FormsModule,
    IonInput,
    IonLabel,
    ReactiveFormsModule,
    IonContent,
    IonTextarea,
    IonDatetime
  ],
  standalone: true
})
export class CreacionEventoComponent {
  eventoForm: FormGroup; // Declarar el formulario

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario con controles y validaciones
    this.eventoForm = this.fb.group({
      foto: [''], // Campo no obligatorio
      titulo: ['', Validators.required], // Campo obligatorio
      descripcion: ['', Validators.required], // Campo obligatorio
      fecha: ['', Validators.required], // Campo obligatorio
      ubicacion: ['', Validators.required], // Campo obligatorio
      aptitudes: ['Todos los públicos'], // Campo no obligatorio con valor por defecto
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.eventoForm.valid) {
      console.log('Evento creado:', this.eventoForm.value);
      // Lógica adicional para manejar la creación del evento
    } else {
      console.error('Formulario inválido');
    }
  }
}
