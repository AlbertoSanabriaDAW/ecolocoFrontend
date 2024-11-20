import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InicioComponent {
  onRegisterClick() {
    console.log('¡Botón de registro presionado!');
    // Aquí puedes agregar lógica de navegación o mostrar un modal de registro.
  }

  onLoginClick() {
    console.log('¡Botón de inicio de sesión presionado!');
    // Aquí puedes agregar lógica de navegación o mostrar un modal de login.
  }
}
