import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LinkItem {
  name:string
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
links: Array<LinkItem> = [
  {
    name: "Juan",
  },
  {
    name: "Pedro",
  },
];
}
