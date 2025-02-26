import { Component, OnDestroy, OnInit } from '@angular/core';
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

  this.trackService.getAllTracks$()
  .subscribe((response:TrackModel[]) => {
    console.log(response)
    this.tracksTrending=response
    this.tracksSaved=response
  })

  this.trackService.getAllTracksRandom$()
  .subscribe((response:TrackModel[]) => {
    this.tracksRandom=response
  })

}

ngOnDestroy(): void {
}

}
