import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {PerfilService} from '../services/perfilService';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  standalone: true,
  imports: [RouterModule, NgForOf],
})
export class PerfilComponent implements OnInit {
    nombre: string = '';
    apellidos: string = '';
    telefono: string = '';
    dni: string = '';
    fechaNacimiento: Date = new Date();
  aptitudes: string[] = [];

  constructor(private perfilService: PerfilService) { }

  onEditClick(): void {
    location.href = `/perfilEditar/${1}`; // Redirección utilizando location.href
  }

  ngOnInit(): void {
    this.perfilService.getPerfil('1').subscribe((perfil) => {
      this.nombre = perfil.nombre;
      this.apellidos = perfil.apellidos;
      this.telefono = perfil.telefono;
      this.dni = perfil.dni;
      this.fechaNacimiento = perfil.fechaNacimiento;
      this.aptitudes = ['manejo de herramientas', 'trabajo en equipo', 'gestión de proyectos'];
    });

  }
}
