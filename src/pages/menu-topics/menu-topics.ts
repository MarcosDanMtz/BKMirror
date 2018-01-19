import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';

@IonicPage()
@Component({
  selector: 'page-menu-topics',
  templateUrl: 'menu-topics.html',
})
export class MenuTopicsPage {

  constructor(public _navCtrl: NavController) {
  }

  cards(){
    this._navCtrl.push(CardsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTopicsPage');
  }

}
