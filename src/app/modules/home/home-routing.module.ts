import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
// import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SideBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
