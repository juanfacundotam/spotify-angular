import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dataRaw from "../../../data/tracks.json"
import { TrackModel } from '@core/models/tracks.model';
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracks: TrackModel[] = []
optionSort: {property: string | null, order: string} = {property: null, order: 'asc'};

  constructor() { }

  ngOnInit() {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data; // Assuming data is an array of TrackModel
  } 
  changeSort(property: string): void {
    const {order} = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
