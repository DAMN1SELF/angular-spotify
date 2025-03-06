import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{

  frmLogin:FormGroup = new FormGroup({});
  constructor(private servicioAuth:AuthService){
  }
  ngOnInit(): void {
    this.frmLogin=new FormGroup({
      email: new FormControl('',
        [Validators.required,
          Validators.email
        ]),
      password:new FormControl('',
        [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14)
        ])
    })
  }

  SendLogin():void{
   const {email,password} =this.frmLogin.value;
    this.servicioAuth.enviarLogin(email,password)
    .subscribe(responseOk =>{
      console.log('Session iniciada correcta 200<400')
    },
    err=>
      console.log('Ocurrio error >=400'))
  }

}
