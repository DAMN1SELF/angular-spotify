
import { MultimediaService } from './../../services/multimedia.service';
import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small'| 'medio' |'big'='big'
  @Input() track:TrackModel={_id:0,name:'',album:'',url:'',cover:''}

  constructor(private MultimediaService:MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track:TrackModel):void{
    console.log('Enviando track',track)
    this.MultimediaService.callback.emit(track)
  }


}
