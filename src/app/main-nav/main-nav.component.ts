import { Component,EventEmitter,OnInit  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from "@angular/router";
import { LocalstorageService } from '../service/localstorage.service';
import { DataService } from '../service/data.service';
import { producto } from '../clases/producto';



@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit  {

        
   notificacion:number=0;
   open:boolean=false
   valor:boolean=false      
   usuario:string="user"

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
            private __serviceLocal:LocalstorageService,
            private __serviceData:DataService) {
  } 


     ngOnInit(){
      this.__serviceData.usuario.subscribe(data=> this.usuario=data)
      this.__serviceData.notificacion.subscribe(data=> {
        let lista:producto[]=this.__serviceLocal.GetStorage("DataCarrito") as producto[]
        this.notificacion=lista.length
      })
    }

    logOut(){
      this.__serviceLocal.RemoveAll()
      this.usuario='user'
    }

}
