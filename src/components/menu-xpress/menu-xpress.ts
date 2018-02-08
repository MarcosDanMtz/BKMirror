import { ResultsPage } from './../../pages/results/results';
import { MenuTopicsPage } from './../../pages/menu-topics/menu-topics';
import { Component, Input } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

/**
 * Generated class for the MenuXpressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-xpress',
  templateUrl: 'menu-xpress.html'
})
export class MenuXpressComponent {

  text: string;
  @Input() idUser;
  constructor(public _alertCtrl: AlertController, public _navCtrl: NavController ) {
  }

  availableSoon(){
    let alert  = this._alertCtrl.create({
      title: 'Not available yet',
      subTitle: 'Working on it, available soon',
      buttons: ['OK']
    });
    alert.present();
  }

  direcToMenuTopics(){
    let view = this._navCtrl.getActive();
    if( view.component.name != "MenuTopicsPage" )
      this._navCtrl.push(MenuTopicsPage);
  }

  directToResuts(){
    let view = this._navCtrl.getActive();
    if( view.component.name != "ResultsPage" )
      this._navCtrl.push(ResultsPage, this.idUser);
  }

}
