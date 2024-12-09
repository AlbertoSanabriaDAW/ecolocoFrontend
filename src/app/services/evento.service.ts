import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mensaje} from '../modelos/mensaje';
import {Evento} from '../modelos/evento';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiURL = '/api/eventos'; // URL de la API

  constructor(private http: HttpClient, private loginService: LoginService) { }

  obtenerEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiURL}/lista`); // Obtener eventos
  }

  guardarEventos(evento: Evento): Observable<Evento> {
    const token = this.loginService.getToken();
    return this.http.post<Evento>(`${this.apiURL}/admin/crear`, evento); // Guardar evento
  }

  darseDeAlta(idUsuario: string, idEvento: string): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiURL}/voluntario/darseDeAlta/${idEvento}/${idUsuario}`, {}); // Apuntar evento
  }

  desapuntarse(idUsuario: string, idEvento: string): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiURL}/voluntario/desapuntarse/${idEvento}/${idUsuario}`, {}); // Desapuntar evento
  }

  listarEventosPorUsuario(idUsuario: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiURL}/voluntario/${idUsuario}`); // Listar eventos por usuario
  }
}
