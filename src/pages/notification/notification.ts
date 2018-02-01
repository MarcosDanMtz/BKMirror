import { DeckService } from './../../app/services/decks.service';
import { MenuTopicsPage } from './../menu-topics/menu-topics';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class NotificationPage implements OnInit {
  dataRecive;
  isResult;
  constructor(public _navCtrl: NavController, public _navParams: NavParams) {
  }

  setCards(){
    this._navCtrl.push(MenuTopicsPage);
  }


  ngOnInit(){
    this.dataRecive = this._navParams.data; 
    if(this.dataRecive[this.dataRecive.length-1]='deck')
      this.isResult = false;
    else
      this.isResult = true;
    console.log(this.dataRecive);
       
  }

}
