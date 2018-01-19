import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTopicsPage } from './menu-topics';

@NgModule({
  declarations: [
    MenuTopicsPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuTopicsPage),
  ],
})
export class MenuTopicsPageModule {}
