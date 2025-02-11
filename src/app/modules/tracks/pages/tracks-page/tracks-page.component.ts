import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent  implements OnInit,OnDestroy{


tracksTrending:Array<TrackModel>=[]
tracksRandom:Array<TrackModel>=[]
tracksSaved:Array<TrackModel>=[]

listObservers$:Array<Subscription>=[]

constructor(private trackService:TrackService) {}


ngOnInit(): void {
  const observer1$ = this.trackService.dataTracksTrending$
  .subscribe(response=>{
    console.log('canciones',response);
    this.tracksTrending=response
  })
  this.listObservers$=[observer1$]
}

ngOnDestroy(): void {
this.listObservers$.forEach(sub=>sub.unsubscribe())
}

}
