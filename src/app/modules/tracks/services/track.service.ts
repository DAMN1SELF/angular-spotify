import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]>=of([])
  dataTracksRandom$:Observable<any>=of([])
  dataTracksSaved$:Observable<TrackModel[]>=of([])

  constructor() {
  }

}
