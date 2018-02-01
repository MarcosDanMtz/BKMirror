
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { Response } from '@angular/http';
import { ServerService } from '../../app/services/server.services';
import { DeckService } from '../../app/services/decks.service';

@IonicPage()
@Component({
  selector: 'page-menu-topics',
  templateUrl: 'menu-topics.html',
})
export class MenuTopicsPage implements OnInit {

  decks;

  constructor(public _navCtrl: NavController, private _Deckservices: DeckService) {  }

  ngOnInit() {
    this._Deckservices.GetxpressAllDecksForAnsByIdUser(16).subscribe(
      (response: Response) => {
        this.decks = response.json();
        console.log(this.decks);
      },
      (error) => console.log(error)
    );
  }

  deckToCards(idDeck, index){
    var indexDeck = 0;
    this.decks.forEach(function (elemento, indice, array) {
      if (elemento.idDeck == idDeck){
        indexDeck = indice;
      }
    });
    // console.log({'idDeck': idDeck, 'EvaluatePT': this.decks[indexDeck].EvaluatePeopleThings, 'IMGVideoFromPT': this.decks[indexDeck].IMGVideoFromPT});
    this._navCtrl.push(CardsPage, {'idDeck': idDeck, 'EvaluatePT': this.decks[indexDeck].EvaluatePeopleThings, 'IMGVideoFromPT': this.decks[indexDeck].IMGVideoFromPT});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTopicsPage');
  }

}
