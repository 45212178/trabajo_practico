import { NgModule } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { ContactosComponent} from './contactos/contactos.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
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
    ButtonModule,
    DialogModule,
    ReactiveFormsModule
    
  ]
})
export class ComponentModule { }