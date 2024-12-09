import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EventoService} from "../services/evento.service";
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-creacion-evento',
  templateUrl: './creacion-evento.component.html',
  styleUrls: ['./creacion-evento.component.css'],
  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class CreacionEventoComponent implements OnInit {
  isAuthenticated: boolean = false;

  eventoForm: FormGroup = new FormGroup({
    titulo: new FormControl('', Validators.required),
    imagen: new FormControl(''),
    descripcion: new FormControl(''),
    fecha: new FormControl(''),
    ubicacion: new FormControl(''),
    aptitudes: new FormControl('')
  });


  constructor(private eventoService: EventoService, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getAuthStatus().subscribe(status => {
      this.isAuthenticated = status;
    });
  }
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
