import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from '../service/localstorage.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserForm: FormGroup;
  Validar: boolean;
  completar:boolean=true;
  hide:boolean=true

  constructor(private route:Router,
    private mensaje:ToastrService,
    private __serviceuser:UsuarioService,
    private __sercioLocal:LocalstorageService) { }

  ngOnInit(): void {
    this.UserForm=this.crearFormulario()
  }

  crearFormulario(){
    return new FormGroup({
     usuario: new FormControl('',Validators.required),
     contrasena: new FormControl('',Validators.required)
    });
  }
  LogIn(){
    if(this.UserForm.valid){
      this.completar=false
      this.__serviceuser.login(this.UserForm.value.usuario,this.UserForm.value.contrasena).
      subscribe(data=>{
        this.mensaje.success("sesion iniciada",data.mensajeRetorno)
        this.__sercioLocal.SetStorage("token",data.token)
        this.__sercioLocal.SetStorage("usuario",data.usuario)
        this.completar=true
        this.route.navigate(["/inicio"])
      },error=>{
        this.completar=true
        this.mensaje.error("error con el servicio","Error")
      })
    }
  }
}
