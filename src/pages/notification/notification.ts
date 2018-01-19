import { MenuTopicsPage } from './../menu-topics/menu-topics';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  constructor(public _navCtrl: NavController) {
  }

  setCards(){
    this._navCtrl.push(MenuTopicsPage);
  }

}
