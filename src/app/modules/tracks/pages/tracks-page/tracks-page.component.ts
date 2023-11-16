import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> = [];

  ngOnInit() {
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data; // Assuming data is an array of TrackModel
  }
}
