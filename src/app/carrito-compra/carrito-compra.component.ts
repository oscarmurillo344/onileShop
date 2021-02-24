import { Component, OnInit } from '@angular/core';
import { producto } from '../clases/producto';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {

  total:number=0
  valor:number=0
  numeroFactura:number=1
  DataCarrito:Array<producto>=new Array()
  constructor( private __serviceLocal:LocalstorageService) { }

  ngOnInit(): void {
  this.DataCarrito=this.__serviceLocal.GetStorage("DataCarrito") as producto[]
  if(this.DataCarrito)this.listar()
  }
  listar(){
    this.total=0;this.valor=0;
    this.DataCarrito.forEach(data=> {
      let precio:number = Number(data.precio)
      this.total+=data.cantidad
      this.valor=this.valor+precio
      this.valor*=this.total
    })
  }
  Eliminar(i,index){
    this.DataCarrito.forEach(data=> data.id== i ? this.DataCarrito.splice(index,1):null)
    this.__serviceLocal.SetStorage("DataCarrito",this.DataCarrito)
    this.listar()
  }

  restar(i){
    this.DataCarrito.forEach(data=> data.id== i && data.cantidad>1 ? data.cantidad--:null)
    this.__serviceLocal.SetStorage("DataCarrito",this.DataCarrito)
    this.listar()
  }
  sumar(i){
    this.DataCarrito.forEach(data=> data.id== i && data.cantidad>0? data.cantidad++:data.cantidad)
    this.__serviceLocal.SetStorage("DataCarrito",this.DataCarrito)
    this.listar()
  }
  Facturar(){

  }
}
