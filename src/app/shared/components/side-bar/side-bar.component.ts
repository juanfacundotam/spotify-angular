import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// interface LinkItem {
//   name:string
// }

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  //   linksMenu:Array<any> = [
  //     {name: 'Home',
  //     icon: 'uil-estate'},
  //     {name: 'Buscar',
  //     icon: 'uil-estate'},

  //   ]
  // links: Array<any> = [
  //   {
  //     name: "Juan",
  //   },
  //   {
  //     name: "Pedro",
  //   },
  // ];
  mainMenu: { defaultOptions: Array<any>; accessLink: Array<any> } = {
    defaultOptions: [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth'],
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' },
      },
    ],
    accessLink: [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      },
    ],
  };

  customOptions: Array<any> = [
    {
      name: 'Mi lista º1',
      router: ['/'],
    },
    {
      name: 'Mi lista º2',
      router: ['/'],
    },
    {
      name: 'Mi lista º3',
      router: ['/'],
    },
    {
      name: 'Mi lista º4',
      router: ['/'],
    },
  ];
}
