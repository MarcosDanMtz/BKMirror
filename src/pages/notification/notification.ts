import { DeckService } from './../../app/services/decks.service';
import { MenuTopicsPage } from './../menu-topics/menu-topics';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CardsService } from '../../app/services/cards.service';

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
  cardNotify;
  img; 
  description;
  constructor(public _navCtrl: NavController, public _navParams: NavParams, private _cardService: CardsService) {
  }

  setCards(){
    this._navCtrl.push(MenuTopicsPage);
  }


  ngOnInit(){
    this.dataRecive = this._navParams.data; 
    console.log(this.dataRecive);

    if(this.dataRecive[this.dataRecive.length-1]==='deck')
      this.isResult = false;
    else if (this.dataRecive[this.dataRecive.length-1]==='resultNotify'){
      this.isResult = true;
      this._cardService.GetOneCardById(this.dataRecive[0].postiveBest[0].idCard).subscribe(
        (response) => {
          this.cardNotify = response.json();
          this.img = this.cardNotify[0].UrlImgVideo;
          this.description = this.cardNotify[0].description;
        },
        (error) => console.log(error)
      );
    }
       
  }

}
