import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = '/api/usuarios'; // URL de la API
  // Estado de autenticación
  private authStatusSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private  http: HttpClient, private router: Router) { }

  //Metodo de login
  login(username: string, password: string): Observable<any> {
    const credenciales = {username, password};
    return this.http.post(`${this.apiURL}/login`, credenciales).pipe(
      tap((response: any) => {
        console.log('Token de autenticación:', response.token); // Mostrar el token de autenticación en la consola
        localStorage.setItem('authToken', response.token); // Guardar el token de autenticación
        this.authStatusSubject.next(true); // Actualizar el estado de autenticación
      })
    ); // Iniciar sesión
  }

  //Metodo de logout
  logout(): void{
    localStorage.removeItem('authToken'); // Eliminar el token de autenticación
    this.authStatusSubject.next(false); // Actualizar el estado de autenticación
    this.router.navigate(['/']); // Redirigir al inicio
  }

  //Metodo para verificar si el usuario esta autenticado
  isAuthenticated(): boolean{
    return localStorage.getItem('authToken') !== null; // Verificar si el token de autenticación está presente
  }

  //Metodo para obtener el estado de autenticación
  getAuthStatus(): Observable<boolean> {
    return this.authStatusSubject.asObservable(); // Obtener el estado de autenticación como un observable
  }

  //Metodo para obtener el UsuarioId
  getUsuarioId(): string | null {
    return localStorage.getItem('usuarioId'); // Obtener el Id del usuario desde el almacenamiento local
  }

  getToken(): string | null {
    return localStorage.getItem('authToken'); // Obtener el token desde el almacenamiento local
  }

  //Metodo para establecer el estado de autenticación
  setAuthStatus(status: boolean): void{
    this.authStatusSubject.next(status); // Actualizar el estado
  }
}
