import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify';

//   name: string = "carlos";
//   auto: AutoTypes = {
//     marca: "Audi",
//     year: 2020
//   }
  
//   listCar: Array<AutoTypes> = [
// {marca: "BW"},
// {marca: "Toyota", year: 2021}
//   ]

}

  // interface AutoTypes {
  //   marca: string;
  //   year?: number;
  // }
