import { PerfilService } from '../services/perfilService';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./perfil-editar.component.css']
})

export class PerfilEditarComponent {
  nombre: string = '';
  apellidos: string = '';
  telefono: string = '';
  dni: string = '';
  fechaNacimiento: Date = new Date();

  constructor(private perfilService: PerfilService) { }

  onSubmit() {
    console.log('Perfil actualizado:', {
      nombre: this.nombre,
      apellidos: this.apellidos,
      telefono: this.telefono,
      dni: this.dni,
      fechaNacimiento: this.fechaNacimiento
    });

    this.editarPerfil();
  }

  editarPerfil(): void {
    this.perfilService.editarPerfil({
      nombre: this.nombre,
      apellidos: this.apellidos,
      telefono: this.telefono,
      dni: this.dni,
      fechaNacimiento: this.fechaNacimiento
    }, 'id').subscribe((res) => {
      console.log('Perfil actualizado:', res);
    });
  }
}
