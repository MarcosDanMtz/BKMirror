import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestingCardsTwoPage } from './testing-cards-two';
import { SwingModule } from 'angular2-swing';


@NgModule({
  declarations: [
    TestingCardsTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(TestingCardsTwoPage),
    SwingModule
  ],
  exports: [
    TestingCardsTwoPage
  ]
})
export class TestingCardsTwoPageModule {}
