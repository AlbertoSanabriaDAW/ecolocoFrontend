import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mensaje} from '../modelos/mensaje';

export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  aptitudes: string[];
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiURL = '/api/eventos'; // URL de la API

  constructor(private http: HttpClient) { }

  obtenerEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiURL}/lista`); // Obtener eventos
  }

  guardarEventos(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(`${this.apiURL}/crear`, evento); // Guardar evento
  }

  darseDeAlta(idUsuario: string, idEvento: string): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiURL}/darseDeAlta/${idEvento}/${idUsuario}`, {}); // Apuntar evento
  }

  desapuntarse(idUsuario: string, idEvento: string): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiURL}/desapuntarse/${idEvento}/${idUsuario}`, {}); // Desapuntar evento
  }

  listarEventosPorUsuario(idUsuario: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiURL}/listaPorUsuario/${idUsuario}`); // Listar eventos por usuario
  }
}
