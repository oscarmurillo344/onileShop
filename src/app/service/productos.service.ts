import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

   URLProducto:string=environment.URL+"/productos"
  constructor(private http:HttpClient) { }

  listarProducto():Observable<any>{
    return this.http.post<any>(this.URLProducto,
  {"transaccion": "generico",
    "tipo": "4"
   })
  }
}
