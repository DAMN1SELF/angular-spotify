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

  this.trackService.getAllTracksTrending$().toPromise()
  .then(res=>{ this.tracksTrending=res })
  .catch(error=>{ console.log('Error ',error) })


  this.trackService.getAllTracksRandom$()
  .subscribe((response:TrackModel[]) => {
    this.tracksRandom=response
  },err => {
    console.log('Error ',err)
  })

  // this.trackService.getAllTracksSaved$()
  // .subscribe((response:TrackModel[]) => {
  //   this.tracksSaved=response
  // })
  this.loadTracksSaved()


}


async loadTracksSaved():Promise<any>{
  this.tracksSaved = await this.trackService.getAllTracksSaved$().toPromise()
}

ngOnDestroy(): void {
}

}
