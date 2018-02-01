import { ResultsPage } from './../results/results';
// import { TestingCardsTwoPage } from './../testing-cards-two/testing-cards-two';
import { NgForm } from '@angular/forms';
import { NotificationPage } from './../notification/notification';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeckService } from '../../app/services/decks.service';
import { Response } from '@angular/http';
// import { TestigMCardsPage } from '../testig-m-cards/testig-m-cards';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  decks: object[];

  constructor(public _navCtr: NavController, private _decksForAns: DeckService){

  }

  ionLoginCheck(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.pass;
    var deksLength;
    var login = true;

    if (login === true){
      this._decksForAns.GetxpressAllDecksForAnsByIdUser(16).subscribe(
        (response: Response) => {
          this.decks = response.json();
        },
        (error) => console.log(error)
      );
      
      if (this.decks.length > 0){
        this.decks.push({'elementType': 'deck'});        
        this._navCtr.push(NotificationPage, this.decks);  
      }
      else
        this._navCtr.push(ResultsPage);
    }


    
    // this._navCtr.push(TestigMCardsPage)
    // this._navCtr.push(TestingCardsTwoPage);
  }

  ionViewDidLoad(){
    setTimeout(() => {
      this.splash = false;
    }, 1000);
  }
}
