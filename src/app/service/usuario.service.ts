import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URLUser:string=environment.URL+"/usuarios"
  constructor(private http:HttpClient) { }

  login(usuario:string,contrasena:string):Observable<any>{
    return this.http.post<any>(this.URLUser,{
      "transaccion": "autenticarUsuario",
      "datosUsuario": {
          "email": usuario,
          "password": contrasena
      }
   })
  }
}
