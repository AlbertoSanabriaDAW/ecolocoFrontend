import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
  standalone: true, // Componente standalone
  imports: [
    IonicModule, // Importa IonicModule para soportar ion-content
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Habilita elementos personalizados de Ionic
})
export class QuienesSomosComponent {}
