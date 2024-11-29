import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  aptitudes: string[];
  foto: string;
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
}
