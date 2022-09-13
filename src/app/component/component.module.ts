import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent} from './contactos/contactos.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    ContactosComponent,
    AdminComponent,
    HomeComponent,
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ]
})
export class ComponentModule { }