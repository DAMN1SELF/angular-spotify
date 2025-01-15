import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  linksMenu:  Array<any>=[
    {
      name:'Home',
      icon:'uil uil-10-plus'
    },
    {
      name:'Buscar',
      icon:'uil uil-12-plus'
    }
  ]

  constructor(){}
  ngOnInit(): void {

  }
}
