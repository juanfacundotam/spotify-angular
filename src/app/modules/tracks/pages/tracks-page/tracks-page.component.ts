import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [CommonModule, SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css',
})
export class TracksPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> = [];

  ngOnInit() {
    const { data }: any = (dataRaw as any).default;
    console.log(data);
    this.mockTracksList = data; // Assuming data is an array of TrackModel
  }
}
