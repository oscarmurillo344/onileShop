import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { producto } from '../clases/producto';
import { DataService } from '../service/data.service';
import { LocalstorageService } from '../service/localstorage.service';
@Component({
  selector: 'sub-vista-principal',
  templateUrl: './sub-vista-principal.component.html',
  styleUrls: ['./sub-vista-principal.component.css']
})
export class SubVistaPrincipalComponent implements OnInit {

  ListaProducto:Array<producto>
  Producto:producto[]=new Array()
  DataCarrito:Array<producto>=new Array()

  constructor(private rutaActiva: ActivatedRoute,
    private __serviceLocal:LocalstorageService,
    private __serviceData:DataService) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe(params=>{
      let id:any=params.get('id')
      if(id){
      this.ListaProducto=this.__serviceLocal.GetStorage("ListaPro") as producto[]
      this.ListaProducto.forEach((data:producto)=> data.id==id ? this.Producto.push(data):null)
      }
    })
    if(this.__serviceLocal.GetStorage("DataCarrito"))this.DataCarrito=this.__serviceLocal.GetStorage("DataCarrito")
  }

  AgregarCarrito(producto:producto):void{
    this.DataCarrito.push(producto)
    this.__serviceLocal.SetStorage("DataCarrito",this.DataCarrito)
    this.__serviceData.notificacion.emit(1)
  }

}
