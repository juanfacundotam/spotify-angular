import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  constructor(private router: Router, private trackServices: TrackService) {} //notese que podemos usar el servicio en cualquier componente

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', '/'],
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
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      },
    ];

    this.customOptions = [
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

    this.trackServices.dataTracksRandom$.subscribe(response => {
      this.customOptions.push(
        {
          name: response[0].name,
          router: []
        }
      )
    })
  }

  goTo($event: any, router: Array<string>): void {
    this.router.navigate(router, 
      // {
      // queryParams: { key1: 'value1', key2: 'value2', key3: 'value3' },
      // }
    );
  }
}
