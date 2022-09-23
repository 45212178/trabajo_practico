//Los componentes de la interfaz de usuario se configuran como módulos, indicando la ruta de importación.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import{AngularFireModule} from'@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';


import { ProductoService } from './servicios/producto.service';
import {MenubarModule} from 'primeng/menubar';
import { ComponentModule } from './component/component.module';
import {RatingModule} from 'primeng/rating';

import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ComponentModule,
    RatingModule,
    DialogModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
