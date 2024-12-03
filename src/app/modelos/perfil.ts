export class Perfil {
  nombre: string;
  apellidos: string;
  telefono: string;
  dni: string;
  fechaNacimiento: Date;

  constructor(nombre: string, apellidos: string, telefono: string, dni: string, fechaNacimiento: Date) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
  }
}
