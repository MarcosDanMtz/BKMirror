import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DecksAnsweredService } from '../../app/services/decksAnswered.service';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage implements OnInit {
  dataRecive;
  decksAnsByAssociate;
  constructor(public navCtrl: NavController, public _navParams: NavParams, private _seriveDecksAns: DecksAnsweredService) {
  }

  ngOnInit(){
    this.dataRecive = this._navParams.data;
    this._seriveDecksAns.GetxpressDecksAnsByIdAss(this.dataRecive).subscribe(
      (response) => {
        this.decksAnsByAssociate = response.json();
      },
      (error) => console.log(error)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
