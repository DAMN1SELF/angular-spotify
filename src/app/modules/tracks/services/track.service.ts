import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TrackModel } from '@core/models/tracks.models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL=environment.api;

  constructor(private http: HttpClient) {
  }

  private skipById(listTracks:TrackModel[],id:number):Promise<TrackModel[]>{
    return new Promise((resolve,reject)=>{
      const listTemp = listTracks.filter(a=>a._id!=id)
      resolve(listTemp)
    })
  }

  getAllTracks$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(map(({data}:any)=>{
          return data
          })
         )
  }

  getAllTracksRandom$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any)=>{
          return data.reverse()
          }),
      map((dataRevertida)=>{ //https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter
          return dataRevertida.filter((track:TrackModel)=>track._id != 1)
          })
        )
  }
}
