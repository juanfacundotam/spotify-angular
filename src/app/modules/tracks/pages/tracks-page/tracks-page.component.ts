import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [CommonModule, SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {
  mockTracksList = [
    {name: 'BEBE (Oficial)'},
    {name: 'BEBE (Oficial)'},
    {name: 'BEBE (Oficial)'},
  ]

}
