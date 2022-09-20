import { NgModule } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { ContactosComponent} from './contactos/contactos.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

import {CarouselModule} from 'primeng/carousel';
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
    CardModule,
    ButtonModule,
    DialogModule,
    CarouselModule,
    ReactiveFormsModule,
    
  ]
})
export class ComponentModule { }