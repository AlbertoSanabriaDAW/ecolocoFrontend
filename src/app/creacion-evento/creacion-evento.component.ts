import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EventoService} from "../services/evento.service";

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

  eventoForm: FormGroup = new FormGroup({
    titulo: new FormControl('', Validators.required),
    imagen: new FormControl(''),
    descripcion: new FormControl(''),
    fecha: new FormControl(''),
    ubicacion: new FormControl(''),
    aptitudes: new FormControl('')
  });

  constructor(private eventoService: EventoService) {}

  onSubmit() {
    if (this.eventoForm && this.eventoForm.valid) {
        this.eventoService.guardarEventos(this.eventoForm.value).subscribe();
      console.log('Evento Guardado:', this.eventoForm.value);
      alert('Evento guardado exitosamente');
    } else {
      alert('Por favor completa el título del evento.');
    }
  }
}
