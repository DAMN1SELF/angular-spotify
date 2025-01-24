import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{

  frmLogin:FormGroup = new FormGroup({});
  constructor(){
  }
  ngOnInit(): void {
    this.frmLogin=new FormGroup({
      email: new FormControl(''),
      password:new FormControl('')
    })
  }

}
