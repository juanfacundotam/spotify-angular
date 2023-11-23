import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from "../../../data/tracks.json"

@Injectable({
  providedIn: 'root'
})
export class TrackService {
dataTracksTrending$: Observable<TrackModel[]> = of([]);
dataTracksRandom$: Observable<any[]> = of([]);
  constructor() {
    const {data}: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id:9,
        name: "level",
        album: "2 cuartos",
        url: "http://",
        cover: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
      }
setTimeout(()=>{
  observer.next([trackExample])

}, 3500)
    })
   }
}
