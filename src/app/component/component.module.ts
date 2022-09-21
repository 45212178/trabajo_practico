import { NgModule } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { ContactosComponent} from './contactos/contactos.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table'
import {CarouselModule} from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { raceInit } from 'rxjs/internal/observable/race';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    ContactosComponent,
    AdminComponent,
    HomeComponent,
    FooterComponent,
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
    TableModule,
    RatingModule
  ]
})
export class ComponentModule { }