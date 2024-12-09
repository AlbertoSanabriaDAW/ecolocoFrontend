import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //Obtener el token del local storage
  const token = localStorage.getItem('authToken');
  console.log('Token en el interceptor:', token); // Mostrar el token en la consola

  //Clonar la petición y añadir el token en la cabecera
  if (token){
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }
  //Si no hay token, se envía la petición sin modificar
  return next(req);
};
