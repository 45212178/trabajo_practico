import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import{AngularFireModule} from'@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AdminComponent } from './component/admin/admin.component';
import { ContactosComponent } from './component/contactos/contactos.component';
import { HomeComponent } from './component/home/home.component';


import { ProductoService } from './servicios/producto.service';
import {CarouselModule} from 'primeng/carousel';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { BebidasComponent } from './menu/bebidas/bebidas.component';
import { ComidasComponent } from './menu/comidas/comidas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    ContactosComponent,
    BebidasComponent,
    ComidasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule,
    MenubarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
