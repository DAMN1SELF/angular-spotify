import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {


  tracks : TrackModel[]=[]
  constructor(){

  }

  optionSort:{
    property:string|null
    order:string
  }={
    property:null,
    order:'asc'
  }


  ngOnInit(): void {
    const {data} : any=(dataRaw as any).default
    this.tracks=data;
  }

  cambiarOrden(property: string): void {
    const { order } = this.optionSort;

    // Cambiar el orden entre asc y desc
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };


    console.log('Orden actual:', this.optionSort, 'Datos ordenados:', this.tracks);
  }



}
