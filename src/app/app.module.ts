import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ReactiveFormsModule} from '@angular/forms';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './Interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
