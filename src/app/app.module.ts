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


import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';

import { ProductoService } from './servicios/producto.service';
import {MenubarModule} from 'primeng/menubar';
import { BebidasComponent } from './menu/bebidas/bebidas.component';
import { ComidasComponent } from './menu/comidas/comidas.component';
import { ComponentModule } from './component/component.module';
import { TortasComponent } from './menu/tortas/tortas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BebidasComponent,
    ComidasComponent,
    TortasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    DialogModule,
    ReactiveFormsModule,
    CardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ComponentModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
