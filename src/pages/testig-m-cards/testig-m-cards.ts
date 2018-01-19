import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  Direction,
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

/**
 * Generated class for the TestigMCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testig-m-cards',
  templateUrl: 'testig-m-cards.html',
})
export class TestigMCardsPage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfigis: StackConfig;
  recentCard: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stackConfigis = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      // allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT],
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      // Now need to send offsetX and offsetY with element instead of just offset
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      throwOutDistance: (d) => {
        return 500;
      }
    }

    this.cards = [
      { Title: 'Do you know', Description: 'C#', image: '../../assets/imgs/programing-languajes/cSharp-min.png'},
      { Title: 'Do you know', Description: 'Java', image: '../../assets/imgs/programing-languajes/JavaLogo-min.jpg'},
      { Title: 'Do you know', Description: 'Python', image: '../../assets/imgs/programing-languajes/python-logo-min.png'}
    ];
  }

  // ngAfterViewInit() {
  //   // ViewChild & ViewChildren are only available
  //   // in this function
  //   console.log('this STACK');
  //   console.log(this.swingStack); // this is the stack
  //   console.log('this CARD');
  //   console.log(this.swingCards); // this is a list of cards

  //   // we can get the underlying stack
  //   // which has methods - createCard, destroyCard, getCard etc
  //   console.log(this.swingStack.stack);

  //   // and the cards
  //   // every card has methods - destroy, throwIn, throwOut etc
  //   this.swingCards.forEach((c) => console.log(c.getCard()));

  //   // this is how you can manually hook up to the
  //   // events instead of providing the event method in the template
  //   this.swingStack.throwoutleft.subscribe(
  //     (event: ThrowEvent) => console.log('Manual hook: ', event));

  //   this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

  //   this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
  // }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestigMCardsPage');
  }

}
