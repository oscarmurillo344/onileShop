import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { LoginComponent } from './login/login.component';
import { SubVistaPrincipalComponent } from './sub-vista-principal/sub-vista-principal.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';

const routes: Routes = [
  {path:'inicio',component:VistaPrincipalComponent},
  {path:'inicio/:id',component:SubVistaPrincipalComponent},
  {path:'carrito',component:CarritoCompraComponent},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'**', component:VistaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
