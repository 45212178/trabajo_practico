import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent} from './contactos/contactos.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ContactosComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }