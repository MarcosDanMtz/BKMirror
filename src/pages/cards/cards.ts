import { CardsService } from './../../app/services/cards.service';
import { ResultsPage } from './../results/results';
import { Component, ViewChild, ViewChildren, QueryList, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  Direction,
  StackConfig,
  // DragEvent,
  SwingStackComponent,
  SwingCardComponent,
  ThrowEvent
} from 'angular2-swing';
import { Response } from '@angular/http';

import { VotesService } from '../../app/services/votes.services';
import { DecksAnsweredService } from '../../app/services/decksAnswered.service';
import { NotificationPage } from '../notification/notification';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage implements OnInit {

  infoDeck;
  cards;
  percentTrue=0;
  percentFalse=0;
  sendInfoNotification;
  cardsTest = [{
    title: 'Do you Know',
    Description: 'JAVA',
    image: '../../assets/imgs/programing-languajes/JavaLogo-min.jpg'
  },
  {
    title: 'Do you Know',
    Description: 'C#',
    image: '../../assets/imgs/programing-languajes/cSharp-min.png'
  },
  {
    title: 'Do you Know',
    Description: 'PHYTON',
    image: '../../assets/imgs/programing-languajes/python-logo-min.png'
  }
];

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  ngOnInit(){
    this.infoDeck = this._navParams.data;  

    if (this.infoDeck.IMGVideoFromPT){
      this._servicesCards.GetxpressCardsNVPTByIdDeck(16, parseInt(this.infoDeck.idDeck)).subscribe(
        (response: Response) => {
          this.cards = response.json();
          console.log(this.cards);
          
          this._votesService.GetPercentByIdCard(this.cards[this.cards.length-1].idCard).subscribe(
            (response) => {
              this.percentTrue = response.json()[0].postive;
              this.percentFalse = response.json()[0].false;
              console.log(this.cards[this.cards.length-1].idCard);
            },
            (error) => console.log(error)
          );

        },
        (error) => console.log(error)
      );
    }else{
      this._servicesCards.GetxpressCardsByIdDeck(16, parseInt(this.infoDeck.idDeck)).subscribe(
        (response: Response) => {
          this.cards = response.json();
          console.log(this.cards);

          this._votesService.GetPercentByIdCard(this.cards[this.cards.length-1].idCard).subscribe(
            (response) => {
              this.percentTrue = response.json()[0].postive;
              this.percentFalse = response.json()[0].false;
              console.log(this.cards[this.cards.length-1].idCard);
            },
            (error) => console.log(error)
          );

        },
        (error) => console.log(error)
      );
    }    
  }

  stackConfig: StackConfig;
  recentCard: string = '';

  constructor(public navCtrl: NavController, public _navParams: NavParams, private _servicesCards: CardsService,
              private _votesService: VotesService, private _decksAns: DecksAnsweredService) {
    this.stackConfig = {
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      // throwOutConfidence: (offset, element: any) => {
      //   return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
      // },
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      },
    };
  }

  onItemMove(element, x, y, r) {
    let descriptionDisplay = '';
    let infoResulCardClass = '';
    let infoResulCard = '';
    let img = '';
    let imgClass = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x > 7) {
      imgClass = 'imgResultCardLike rotateIn animated'; 
      img = '../../assets/imgs/Cards/laughing.png';
      infoResulCardClass = 'descripResultCardLike flip animated';
      infoResulCard = this.percentTrue.toString() + '%';
      descriptionDisplay = 'none';
    } else if  (x == 0 ){
      descriptionDisplay = '';
      imgClass = '';
      infoResulCardClass = '';
    }else if (x < -7){
      descriptionDisplay = 'none';
      imgClass = 'imgResultCardHate rotateIn animated'; 
      img = '../../assets/imgs/Cards/angry.png';
      infoResulCardClass = 'descripResultCardHate flip animated';
      infoResulCard = this.percentFalse.toString() + '%';
    }
    
    element.children[3].className = imgClass;    
    element.children[3].src = img;
    element.children[4].className = infoResulCardClass;
    element.children[4].innerHTML = infoResulCard;
    element.children[2].style['display'] = descriptionDisplay;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;    
    
  }

  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    const numPadding = typeof (padding) === 'undefined' || padding === null ? 2 : padding;

    while (hex.length < numPadding) {
      hex = '0' + hex;
    }

    return hex;
  }

  voteUp(like: boolean) {
    //const removedCard = this.cards.pop();
  }

  onThrowOut(event: ThrowEvent, indexCard) {
    var idCard = parseInt(event.target.id);
    var idAssociate = 16;
    var idPTEvaluate = 0;

    var vote = null;
    if (event.throwDirection.toString() === 'Symbol(RIGHT)')
      vote = true;
    else if (event.throwDirection.toString() === 'Symbol(LEFT)')
      vote = false;  
    
    if (this.infoDeck.IMGVideoFromPT){
      idPTEvaluate = this.cards[indexCard].IdThingPeople
      this._votesService.PostVote(idCard, idAssociate, vote, idPTEvaluate).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }else{
      this._votesService.PostVote(idCard, idAssociate, vote, idPTEvaluate).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }
    this.cards.splice(indexCard, 1); 
    if (this.cards.length == "0"){
      this.infoDeck.idDeck
      this._decksAns.PostxpressDecksAns(16, this.infoDeck.idDeck).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      this._votesService.GetBestWorst(this.infoDeck.idDeck).subscribe(
        (response) => {
          this.sendInfoNotification = response.json()
          this.sendInfoNotification.push('resultNotify');  
          this.navCtrl.push(NotificationPage, this.sendInfoNotification)       
        },
        (error) => console.log(error)
      );
      // this.navCtrl.push(NotificationPage, sendInfoNotification)
    }else{
      this._votesService.GetPercentByIdCard(this.cards[indexCard-1].idCard).subscribe(
        (response) => {
          this.percentTrue = response.json()[0].postive;
          this.percentFalse = response.json()[0].false;
        },
        (error) => console.log(error)
      );

    }

  }

  clickCard(){
    console.log(this.cards);
    // this._votesService.GetPercentByIdCard(this.cards[this.cards.length])
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
