import {LoginService} from '../services/login.service';

interface EventoInfo {
  evento: number;
  apuntado: string;
}

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
import {NgForOf, Location} from '@angular/common';
import {EventoService} from '../services/evento.service';
import {Observable} from 'rxjs';
import {Mensaje} from '../modelos/mensaje';
import {Evento} from '../modelos/evento';

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
  eventos: Evento[] = [];
  is_active: number[] = [];
  eventos2: { [key: number]: EventoInfo } = {};
  userId: string | null;

  constructor(private eventoService: EventoService, private loginService: LoginService) {
    this.userId = loginService.getUsuarioId();
  }

  ngOnInit(): void {
    this.eventoService.obtenerEventos().subscribe((eventos: Evento[]) => {
      this.eventos = eventos;
      this.eventoService.listarEventosPorUsuario('1').subscribe((eventosUsuario: Evento[]) => {
        this.is_active = eventosUsuario.map((evento: Evento) => evento.id);
        this.eventos.forEach(evento => {
          this.eventos2[evento.id] = {
            evento: evento.id,
            apuntado: this.apuntado(evento)
          };
        });
      });
    });
  }

  apuntarse(evento: any) {
    if (!evento) {
      return;
    }
    this.eventoService.darseDeAlta('1', evento.id).subscribe(
      (response: Mensaje) => {
        location.reload();
        alert(`Mensaje: ${response.mensaje}`);
        // Aquí puedes mostrar un mensaje de éxito al usuario
      },
      (error: Mensaje) => {
        location.reload();
        alert(`Mensaje: ${error.mensaje}`);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }

  apuntado(evento: Evento) {
    if (this.is_active.includes(evento.id)) {
      return 'Apuntado';
    } else {
      return 'Apuntarse';
    }
  }

}
