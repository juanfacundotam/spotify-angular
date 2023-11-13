import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    // Otros componentes que puedas tener en SharedModule
  ],
  imports: [
    CommonModule,
    // Otros módulos necesarios para SharedModule
  ],
  exports: [

    // Otros componentes que quieras exportar
  ]
})
export class SharedModule { }