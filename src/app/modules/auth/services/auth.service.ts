import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  enviarLogin(email:string,password:string):void{
    console.log(email,password);
 }
}
