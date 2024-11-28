import { Component } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol, IonContent,
  IonGrid, IonHeader,
  IonImg,
  IonRow
} from '@ionic/angular/standalone';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  standalone: true,
  imports: [
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonButton,
    NgForOf,
    IonHeader
  ],
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  eventos = [
    {
      foto: 'assets/img/limpieza-playa.jpg',
      titulo: 'Recogida de basura en la playa',
      descripcion: 'Ayúdanos a limpiar las playas y proteger el medio ambiente.',
      ubicacion: 'Playa de la Barceloneta, Barcelona',
      aptitudes: ['Carnet de conducir', 'Trabajo en equipo']
    },
    {
      foto: 'assets/img/plantar-vegetacion.jpg',
      titulo: 'Plantar vegetación autóctona',
      descripcion: 'Colabora en la reforestación de áreas naturales.',
      ubicacion: 'Parque Nacional de Doñana, Huelva',
      aptitudes: ['Conocimientos básicos de jardinería', 'Vegano']
    },
    {
      foto: 'assets/img/rescate-ciudadano.jpg',
      titulo: 'Simulacro de rescate ciudadano',
      descripcion: 'Participa en un simulacro para aprender técnicas de rescate.',
      ubicacion: 'Plaza Mayor, Madrid',
      aptitudes: ['Conocimientos en primeros auxilios', 'Buena condición física']
    },
    {
      foto: 'assets/img/limpieza-parque.jpg',
      titulo: 'Limpieza de parques urbanos',
      descripcion: 'Mantén limpios los parques y zonas verdes de tu ciudad.',
      ubicacion: 'Parque del Retiro, Madrid',
      aptitudes: ['Trabajo en equipo', 'Compromiso medioambiental']
    }
  ];

  apuntarse(evento: any) {
    console.log('Apuntado al evento:', evento.titulo);
    alert(`Te has apuntado al evento: ${evento.titulo}`);
  }
}
