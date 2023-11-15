import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
 mockCover: TrackModel = {
  cover: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1198260%2Falbum_media_music_icon&psig=AOvVaw2bsZa1XV6r1gNA56k0Imsn&ust=1700142293881000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDFkN6RxoIDFQAAAAAdAAAAABAE',
  album: 'Yes',
  name: 'Gates',
  url: "http://localhost/track.mp3",
  _id: 1,
 }

}
