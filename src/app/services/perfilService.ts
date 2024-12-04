import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Perfil} from '../modelos/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private apiURL = '/api/perfil'; // URL de la API

  constructor(private http: HttpClient) { }

  editarPerfil(perfil: {
    apellidos: string;
    fechaNacimiento: Date;
    telefono: string;
    nombre: string;
    dni: string
  }, id: string): Observable<any> {
    return this.http.post(`${this.apiURL}/editar/${id}`, perfil);
  }

  getPerfil(id: string): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.apiURL}/${id}`);
  }
}
