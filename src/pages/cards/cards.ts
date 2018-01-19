import { ResultsPage } from './../results/results';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  Direction,
  StackConfig,
  // DragEvent,
  SwingStackComponent,
  SwingCardComponent,
  ThrowEvent
} from 'angular2-swing';


@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;


  cards = [{
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

  stackConfig: StackConfig;
  recentCard: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
      infoResulCard = '87%';
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
      infoResulCard = '21%';
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

  onThrowOut(event: ThrowEvent) {
    console.log(event);

    console.log('Hook from the template', event.throwDirection);
    console.log(event.target.id);
    
    if (event.target.id == "0"){
      this.navCtrl.push(ResultsPage)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
