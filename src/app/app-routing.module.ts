import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { ContactosComponent } from './component/contactos/contactos.component';
import { HomeComponent } from './component/home/home.component';
import { BebidasComponent } from './menu/bebidas/bebidas.component';
import { ComidasComponent } from './menu/comidas/comidas.component';

const routes: Routes = [
  {path:"admin", component:AdminComponent},
  {path:"bebidas", component:BebidasComponent},
  {path:"comidas", component:ComidasComponent},
  {path:"contactos", component:ContactosComponent},
  {path:"/", component:HomeComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
