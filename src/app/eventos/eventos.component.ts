import {Component, OnInit} from '@angular/core';
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
import {EventoService} from '../services/evento.service';
import {Observable} from 'rxjs';
import {Mensaje} from '../modelos/mensaje';

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
export class EventosComponent implements OnInit {
  eventos: any[] = [];

  constructor(private eventoService: EventoService) {
  }

  ngOnInit(): void {
    this.eventoService.obtenerEventos().subscribe((eventos: any[]) => {
      this.eventos = eventos;
    });
  }

  apuntarse(evento: any) {
    if (!evento) {
      return;
    }
    this.eventoService.darseDeAlta('1', evento.id).subscribe(
      (response: Mensaje) => {
        alert(`Mensaje: ${response.mensaje}`);
        // Aquí puedes mostrar un mensaje de éxito al usuario
      },
      (error: Mensaje) => {
        alert(`Mensaje: ${error.mensaje}`);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }
}
