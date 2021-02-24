import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuario= new EventEmitter<string>()
  notificacion= new EventEmitter<number>()

  constructor() { }
}
