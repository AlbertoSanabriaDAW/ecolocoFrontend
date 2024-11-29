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
}
