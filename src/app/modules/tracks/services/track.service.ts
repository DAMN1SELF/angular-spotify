import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]>=of([])
  dataTracksRandom$:Observable<any>=of([])
  dataTracksSaved$:Observable<TrackModel[]>=of([])

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data)

    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample:TrackModel = {
        _id: '1',
        name  : 'Track 1',
        album : 'Album 1',
        url : 'https://www.youtube.com/watch?v=1',
        cover: 'https://i.ytimg.com/vi/1/mqdefault.jpg',
      }
      setTimeout(() =>
        {
          observer.next([trackExample])
        },5000)
    })
  }

}
