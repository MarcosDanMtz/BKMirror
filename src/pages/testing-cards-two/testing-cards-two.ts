import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  StackConfig,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';

@IonicPage()
@Component({
  selector: 'page-testing-cards-two',
  templateUrl: 'testing-cards-two.html',
})
export class TestingCardsTwoPage {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: object [];
  stackConfig: StackConfig;
  recentCard: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.stackConfig = {
      throwOutConfidence: (offset, element: any) => {
        return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });

    this.cards = [{"gender":"male","name":{"title":"mr","first":"nooa","last":"salmi"},"location":{"street":"8887 esplanadi","city":"rusko","state":"lapland","postcode":36216},"email":"nooa.salmi@example.com","login":{"username":"silverpanda835","password":"titty","salt":"kJSZF8oO","md5":"da405ea97cbf481fe02c5a9c849b09fe","sha1":"b382797a765a123b8390b1064507999a67b67063","sha256":"faf1bfd0bd119301c9a9120f7cec6f210fdb5f12e7f2d1ac1bf284fea80b8734"},"dob":"1977-05-30 01:09:40","registered":"2004-07-29 20:03:40","phone":"06-474-760","cell":"046-653-63-87","id":{"name":"HETU","value":"577-369T"},"picture":{"large":"https://randomuser.me/api/portraits/men/27.jpg","medium":"https://randomuser.me/api/portraits/med/men/27.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/27.jpg"},"nat":"FI"},{"gender":"female","name":{"title":"mrs","first":"jéssica","last":"novaes"},"location":{"street":"1145 rua boa vista ","city":"santos","state":"espírito santo","postcode":84624},"email":"jéssica.novaes@example.com","login":{"username":"organickoala822","password":"march","salt":"fLoGSDZg","md5":"6cec7aa1489c3a6ffd6e8107457970c6","sha1":"83a76d4c22bf3451783e4a9ae085d76a1092738a","sha256":"423df2d821284d88ac29b3a5fa7518aa5aff4ffa8799e098dffa78a4c60c7c83"},"dob":"1949-05-27 18:49:23","registered":"2006-06-13 20:19:51","phone":"(76) 0422-5199","cell":"(97) 4784-9005","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/33.jpg","medium":"https://randomuser.me/api/portraits/med/women/33.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/33.jpg"},"nat":"BR"},{"gender":"female","name":{"title":"ms","first":"ceylan","last":"erginsoy"},"location":{"street":"5283 doktorlar cd","city":"sakarya","state":"manisa","postcode":23082},"email":"ceylan.erginsoy@example.com","login":{"username":"redmouse127","password":"joey","salt":"aDpkoaAV","md5":"a19d56c0905e8ca04deee1087a08bb94","sha1":"01a93a41bf51285239855fe6d8ec03922baf068c","sha256":"eb6227b8a2fa5c3dc4c2f5873336fab31c31c45139c6d76f110ca134aef3ad05"},"dob":"1956-12-28 01:24:40","registered":"2003-08-28 10:12:57","phone":"(807)-161-5446","cell":"(908)-177-4664","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/19.jpg","medium":"https://randomuser.me/api/portraits/med/women/19.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/19.jpg"},"nat":"TR"},{"gender":"male","name":{"title":"mr","first":"elias","last":"scholz"},"location":{"street":"1919 blumenstraße","city":"schwabach","state":"berlin","postcode":27175},"email":"elias.scholz@example.com","login":{"username":"greenfrog862","password":"patricia","salt":"0PEhBSUk","md5":"7a3c83d71d87e4f7bf66d474009c9245","sha1":"234a3bdf129591dceeb6f67d19541340d4b8efce","sha256":"e62ede3d361ee5bb1b5050c460b1089feae44511421c4f4ce207659309f52fe0"},"dob":"1976-03-14 01:02:49","registered":"2011-03-25 05:57:08","phone":"0755-7507774","cell":"0179-4094937","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/49.jpg","medium":"https://randomuser.me/api/portraits/med/men/49.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/49.jpg"},"nat":"DE"},{"gender":"male","name":{"title":"mr","first":"علی رضا","last":"قاسمی"},"location":{"street":"9762 بلوار کشاورز","city":"بوشهر","state":"یزد","postcode":52170},"email":"علی رضا.قاسمی@example.com","login":{"username":"lazydog907","password":"737373","salt":"CLvGIBYJ","md5":"55af7edf64c5dc672cda47a313df7122","sha1":"57b8f84fde608b678e012402300e5095529a6a5c","sha256":"7c806d913d8ff80747317939563479bf762064436e16fbcb185da40d75cdd36f"},"dob":"1958-12-06 11:08:00","registered":"2011-01-17 01:39:49","phone":"037-06950612","cell":"0986-457-6000","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/20.jpg","medium":"https://randomuser.me/api/portraits/med/men/20.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/20.jpg"},"nat":"IR"}];
    // this.addNewCards(3);
  }

  onItemMove(element, x, y, r) {
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x > 0) {
      color = '#' + hexCode + 'FF' + hexCode;
    } else {
      color = '#FF' + hexCode + hexCode;
    }

    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  // addNewCards(count: number) {
  //   this.http.get('https://randomuser.me/api/?results=' + count)
  //     .subscribe((result: any) => {
  //       for (const val of result.results) {
  //         this.cards.push(val);         
  //       }
  //     });
  //     console.log(this.cards);
      
  // }

  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    const numPadding = typeof (padding) === 'undefined' || padding === null ? 2 : padding;

    while (hex.length < numPadding) {
      hex = '0' + hex;
    }

    return hex;
  }


  addNewCards(count: number) {
    this.http.get('https://randomuser.me/api/?results=' + count)
      .subscribe((result: any) => {
        for (const val of result.results) {
          this.cards.push(val);
        }
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestingCardsTwoPage');
  }

}
