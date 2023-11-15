import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { TracksPageComponent } from '@modules/tracks/pages/tracks-page/tracks-page.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarComponent,
    TracksPageComponent
  ]
})
export class HomeModule { }