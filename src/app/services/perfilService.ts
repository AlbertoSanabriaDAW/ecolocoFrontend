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

  editarPerfil(perfil: Perfil, id:string): Observable<any> {
    return this.http.put(`${this.apiURL}/editar/${id}`, perfil);
  }
}
