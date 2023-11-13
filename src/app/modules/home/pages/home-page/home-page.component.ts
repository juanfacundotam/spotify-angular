import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
