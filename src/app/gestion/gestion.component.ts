import { Component } from '@angular/core';
import {IonContent} from '@ionic/angular/standalone';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [
    IonContent,
    RouterLink
  ],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
