// import { TestingCardsTwoPage } from './../testing-cards-two/testing-cards-two';
import { NgForm } from '@angular/forms';
import { NotificationPage } from './../notification/notification';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { TestigMCardsPage } from '../testig-m-cards/testig-m-cards';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;

  constructor(public _navCtr: NavController){

  }

  ionLoginCheck(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.pass;
    console.log(email + " " + pass);
    this._navCtr.push(NotificationPage);
    // this._navCtr.push(TestigMCardsPage)
    // this._navCtr.push(TestingCardsTwoPage);
  }

  ionViewDidLoad(){
    setTimeout(() => {
      this.splash = false;
    }, 1000);
  }
}
