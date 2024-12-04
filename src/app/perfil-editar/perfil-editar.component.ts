import { PerfilService } from '../services/perfilService';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./perfil-editar.component.css']
})
export class PerfilEditarComponent implements OnInit {
  nombre: string = '';
  apellidos: string = '';
  telefono: string = '';
  dni: string = '';
  fechaNacimiento: Date = new Date();
  aptitudes: string[] = [];
  id: string = '';

  constructor(private perfilService: PerfilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.perfilService.getPerfil(this.id).subscribe((perfil) => {
      this.nombre = perfil.nombre;
      this.apellidos = perfil.apellidos;
      this.telefono = perfil.telefono;
      this.dni = perfil.dni;
      this.fechaNacimiento = perfil.fechaNacimiento;
      this.aptitudes = ['manejo de herramientas', 'trabajo en equipo', 'gestión de proyectos'];
    });
  }

  onSubmit() {
    console.log('Perfil actualizado:', {
      nombre: this.nombre,
      apellidos: this.apellidos,
      telefono: this.telefono,
      dni: this.dni,
      fechaNacimiento: this.fechaNacimiento,
      aptitudes: this.aptitudes,
    });
    this.editarPerfil();
    location.href = `/perfil`;
  }

  editarPerfil(): void {
    this.perfilService.editarPerfil({
      nombre: this.nombre,
      apellidos: this.apellidos,
      telefono: this.telefono,
      dni: this.dni,
      fechaNacimiento: this.fechaNacimiento,
    }, this.id).subscribe((res) => {
      console.log('Perfil actualizado:', res);
    });
  }
}
