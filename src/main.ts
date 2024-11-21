import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proveedor de rutas
    importProvidersFrom(ReactiveFormsModule, IonicModule.forRoot()), // Importar módulos necesarios
  ],
}).catch((err) => console.error(err));
