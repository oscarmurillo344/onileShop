import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { ProductosService } from './service/productos.service';
import { LocalstorageService } from './service/localstorage.service';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { HttpClientModule } from '@angular/common/http';
import { SubVistaPrincipalComponent } from './sub-vista-principal/sub-vista-principal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioService } from './service/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SubHeaderComponent,
    VistaPrincipalComponent,
    CarritoCompraComponent,
    SubVistaPrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-center',
      preventDuplicates:false
    }),
  ],
  providers: [ProductosService,LocalstorageService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
