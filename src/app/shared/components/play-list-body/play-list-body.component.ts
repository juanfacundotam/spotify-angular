import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dataRaw from "../../../data/tracks.json"
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  tracks: TrackModel[] = []
  ngOnInit() {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data; // Assuming data is an array of TrackModel
  } 
}
