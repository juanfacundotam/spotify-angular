import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) {}

  getAllTracks$(): Observable {
    return
  }
}
