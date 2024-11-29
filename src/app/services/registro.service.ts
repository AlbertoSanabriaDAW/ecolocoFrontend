import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Registro} from '../modelos/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiURL = '/api/usuarios'; // URL de la API

  constructor(private http: HttpClient) { }

  registrarUsuario(registro: Registro): Observable<any> {
    return this.http.post(`${this.apiURL}/registro`, registro); // Registrar usuario
  }
}
