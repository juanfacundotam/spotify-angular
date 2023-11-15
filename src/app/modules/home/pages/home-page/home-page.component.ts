import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { TracksPageComponent } from '@modules/tracks/pages/tracks-page/tracks-page.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, SideBarComponent, MediaPlayerComponent, RouterModule, TracksPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
