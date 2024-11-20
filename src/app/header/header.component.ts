import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  navigateTo(page: string) {
    console.log(`Redirigiendo a: ${page}`);
    // Aquí puedes implementar la lógica de navegación con Angular Router en el futuro.
    // Ejemplo:
    // this.router.navigate([`/${page}`]);
  }
}
