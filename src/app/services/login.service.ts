import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = '/api/usuarios'; // URL de la API

  constructor(private  http: HttpClient) { }

  //Metodo de login
  login(username: string, password: string): Observable<any> {
    const credenciales = {username, password};
    return this.http.post(`${this.apiURL}/login`, credenciales); // Iniciar sesión
  }

  //Metodo de logout
  logout(): void{
    localStorage.removeItem('authToken');
  }

  //Metodo para verificar si el usuario esta autenticado
  isAutenticated(): boolean{
    return localStorage.getItem('authToken') !== null; // Verificar si el token de autenticación está presente
  }
}
