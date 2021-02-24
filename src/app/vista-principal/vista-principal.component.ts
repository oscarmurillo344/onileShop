import { Component, OnInit } from '@angular/core';
import { producto } from '../clases/producto';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { DataService } from '../service/data.service';
import { LocalstorageService } from '../service/localstorage.service';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {

  ListaProducto:Array<producto>=new Array()
  constructor(
    private __serviceProducto:ProductosService,
    private __serviceLocal:LocalstorageService,
    private __serviceData:DataService) { }

  ngOnInit(): void {
    this.__serviceProducto.listarProducto().subscribe((data:any)=>{
      this.ListaProducto=data.data as producto[]
      this.ListaProducto.forEach(data=> data.cantidad==null ? data.cantidad=1: null)
      this.__serviceLocal.SetStorage("ListaPro",this.ListaProducto)
    },error=>{
      console.log(error)
    })
    if(this.__serviceLocal.GetStorage("usuario")){
      let nombre:string=this.__serviceLocal.GetStorage("usuario").nombre
     setTimeout(d=>{
      this.__serviceData.usuario.emit(nombre)
     },1000)
    }
  }
}
