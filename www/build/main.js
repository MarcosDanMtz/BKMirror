webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__results_results__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardsPage = (function () {
    function CardsPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cards = [{
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
        this.recentCard = '';
        this.stackConfig = {
            allowedDirections: [__WEBPACK_IMPORTED_MODULE_3_angular2_swing__["Direction"].LEFT, __WEBPACK_IMPORTED_MODULE_3_angular2_swing__["Direction"].RIGHT],
            // throwOutConfidence: (offset, element: any) => {
            //   return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
            // },
            throwOutConfidence: function (offsetX, offsetY, element) {
                return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            },
        };
    }
    CardsPage.prototype.onItemMove = function (element, x, y, r) {
        var descriptionDisplay = '';
        var infoResulCardClass = '';
        var infoResulCard = '';
        var img = '';
        var imgClass = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x > 7) {
            imgClass = 'imgResultCardLike rotateIn animated';
            img = '../../assets/imgs/Cards/laughing.png';
            infoResulCardClass = 'descripResultCardLike flip animated';
            infoResulCard = '87%';
            descriptionDisplay = 'none';
        }
        else if (x == 0) {
            descriptionDisplay = '';
            imgClass = '';
            infoResulCardClass = '';
        }
        else if (x < -7) {
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
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    CardsPage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        var numPadding = typeof (padding) === 'undefined' || padding === null ? 2 : padding;
        while (hex.length < numPadding) {
            hex = '0' + hex;
        }
        return hex;
    };
    CardsPage.prototype.voteUp = function (like) {
        //const removedCard = this.cards.pop();
    };
    CardsPage.prototype.onThrowOut = function (event) {
        console.log(event);
        console.log('Hook from the template', event.throwDirection);
        console.log(event.target.id);
        if (event.target.id == "0") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__results_results__["a" /* ResultsPage */]);
        }
    };
    CardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_swing__["SwingStackComponent"])
    ], CardsPage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["QueryList"])
    ], CardsPage.prototype, "swingCards", void 0);
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-cards',template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/cards/cards.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Cards</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n  <ul swing-stack #myswing1 [stackConfig]="stackConfig" id="card-stack" (throwout)="onThrowOut($event)">\n    <li class="stack" #mycards1 swing-card *ngFor="let card of cards; let i = index " (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="{{i}}">\n        <img class="imgCard" src="{{card.image}}" alt="{{card.title}}">\n        <h1 class="TEXT-Title titleCard">{{ card.title }}</h1>\n        <p class="descriptCard">{{card.Description}}</p>\n        <img src="" alt="" class="">\n        <h2 class=""></h2>\n    </li>\n  </ul>\n  <menu-xpress></menu-xpress>\n</ion-content>\n\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/cards/cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_topics_menu_topics__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(_navCtrl) {
        this._navCtrl = _navCtrl;
    }
    NotificationPage.prototype.setCards = function () {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__menu_topics_menu_topics__["a" /* MenuTopicsPage */]);
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/notification/notification.html"*/'\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>notification</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <img class="imgBackground" src="../../assets/imgs/Index/smile.jpg" alt="">\n  <div class="contanierGlobal">\n    <div class="globalTitleContainer"> \n        <h1 class="globalTitle">You have a new set of cards</h1>\n    </div>\n  </div>\n\n  <div class="btnCenter notify">\n    <button class="btn" ion-button round (click)="setCards()">Continue</button>\n  </div>\n\n  <menu-xpress></menu-xpress>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		305,
		5
	],
	"../pages/menu-topics/menu-topics.module": [
		306,
		4
	],
	"../pages/notification/notification.module": [
		307,
		3
	],
	"../pages/results/results.module": [
		308,
		2
	],
	"../pages/testig-m-cards/testig-m-cards.module": [
		309,
		1
	],
	"../pages/testing-cards-two/testing-cards-two.module": [
		310,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_notification__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TestigMCardsPage } from '../testig-m-cards/testig-m-cards';
var HomePage = (function () {
    function HomePage(_navCtr) {
        this._navCtr = _navCtr;
        this.splash = true;
    }
    HomePage.prototype.ionLoginCheck = function (form) {
        var email = form.value.email;
        var pass = form.value.pass;
        console.log(email + " " + pass);
        this._navCtr.push(__WEBPACK_IMPORTED_MODULE_0__notification_notification__["a" /* NotificationPage */]);
        // this._navCtr.push(TestigMCardsPage)
        // this._navCtr.push(TestingCardsTwoPage);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.splash = false;
        }, 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/home/home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n    <img src="../../assets/imgs/Logos/x_logo-white.png" class = \'IMGlogo-splash jello animated\' alt="">\n    <!-- <img class = \'IMGlogo-splash jello animated\' src="http://res.cloudinary.com/dnakveysz/image/upload/v1515173473/walmartspark_udtxat.png"> -->\n</div>\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<!-- url(\'../../assets/imgs/Index/writing-min.jpg\')" -->\n\n<ion-content padding>\n  <img class="imgBackground" src="../../assets/imgs/Index/creativeColors1-min.jpg" alt="">\n\n  <div class="contanierGlobal"> \n        <!-- autoplay="3000" loop="true" speed="1000" -->\n    <ion-slides autoplay="3000" loop="true" speed="1000">\n        <ion-slide>\n          <img src="../../assets/imgs/Logos/x_logo-white.png" alt="">\n          <img class="secondaryImage" src="../../assets/imgs/Index/writing-min.jpg" alt="cards">\n          <p class="descriptionSlider">receive feedback, create and answer forms</p>\n        </ion-slide>\n      \n        <ion-slide>\n          <h1 class="primaryTitleSlider">Make cards</h1>\n          <img class="secondaryImage" src="../../assets/imgs/Index/thinkgMen-min.jpg" alt="cards">\n          <p class="descriptionSlider">Create your own card</p>\n        </ion-slide>\n      \n        <ion-slide >\n          <h1 class="primaryTitleSlider">Easy</h1>\n          <img class="secondaryImage" src="../../assets/imgs/Index/swipeSlider.png" alt="cards">\n          <p class="descriptionSlider">Just swipe</p>\n        </ion-slide>\n    </ion-slides>\n\n    <form (ngSubmit) = "ionLoginCheck(f)" #f="ngForm" class="form-horizontal login" role="form">\n        <ion-item>\n          <ion-label color="primary">Email</ion-label>\n          <ion-input ngModel id="email" name="email" placeholder="Text Input" type="email" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary">Password</ion-label>\n          <ion-input ngModel id="pass" name="pass" placeholder="Text Input" type="password" required></ion-input>\n        </ion-item>\n        <div class="btnCenter">\n          <button class="btn" ion-button round>Login</button>\n        </div>\n    </form> \n  </div> \n</ion-content>\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestigMCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_swing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TestigMCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestigMCardsPage = (function () {
    function TestigMCardsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recentCard = '';
        this.stackConfigis = {
            // Default setting only allows UP, LEFT and RIGHT so you can override this as below
            // allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT],
            allowedDirections: [__WEBPACK_IMPORTED_MODULE_2_angular2_swing__["Direction"].LEFT, __WEBPACK_IMPORTED_MODULE_2_angular2_swing__["Direction"].RIGHT],
            // Now need to send offsetX and offsetY with element instead of just offset
            throwOutConfidence: function (offsetX, offsetY, element) {
                return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
            },
            throwOutDistance: function (d) {
                return 500;
            }
        };
        this.cards = [
            { Title: 'Do you know', Description: 'C#', image: '../../assets/imgs/programing-languajes/cSharp-min.png' },
            { Title: 'Do you know', Description: 'Java', image: '../../assets/imgs/programing-languajes/JavaLogo-min.jpg' },
            { Title: 'Do you know', Description: 'Python', image: '../../assets/imgs/programing-languajes/python-logo-min.png' }
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
    TestigMCardsPage.prototype.onThrowOut = function (event) {
        console.log('Hook from the template', event.throwDirection);
    };
    TestigMCardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestigMCardsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_swing__["SwingStackComponent"])
    ], TestigMCardsPage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], TestigMCardsPage.prototype, "swingCards", void 0);
    TestigMCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-testig-m-cards',template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/testig-m-cards/testig-m-cards.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>testigMCards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="viewport">\n    <ul class="stack" swing-stack  [stackConfig]="stackConfig"  #myswing1 (throwout)="onThrowOut($event)">\n      <li swing-card #mycards1 [ngClass]="c.Title" *ngFor="let c of cards">\n        <img src="{{ c.image }}" alt="{{c.Title}}">\n      </li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/testig-m-cards/testig-m-cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TestigMCardsPage);
    return TestigMCardsPage;
}());

//# sourceMappingURL=testig-m-cards.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingCardsTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestingCardsTwoPage = (function () {
    function TestingCardsTwoPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.recentCard = '';
        this.stackConfig = {
            throwOutConfidence: function (offset, element) {
                return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            }
        };
    }
    TestingCardsTwoPage.prototype.ngAfterViewInit = function () {
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#ffffff';
        });
        this.cards = [{ "gender": "male", "name": { "title": "mr", "first": "nooa", "last": "salmi" }, "location": { "street": "8887 esplanadi", "city": "rusko", "state": "lapland", "postcode": 36216 }, "email": "nooa.salmi@example.com", "login": { "username": "silverpanda835", "password": "titty", "salt": "kJSZF8oO", "md5": "da405ea97cbf481fe02c5a9c849b09fe", "sha1": "b382797a765a123b8390b1064507999a67b67063", "sha256": "faf1bfd0bd119301c9a9120f7cec6f210fdb5f12e7f2d1ac1bf284fea80b8734" }, "dob": "1977-05-30 01:09:40", "registered": "2004-07-29 20:03:40", "phone": "06-474-760", "cell": "046-653-63-87", "id": { "name": "HETU", "value": "577-369T" }, "picture": { "large": "https://randomuser.me/api/portraits/men/27.jpg", "medium": "https://randomuser.me/api/portraits/med/men/27.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg" }, "nat": "FI" }, { "gender": "female", "name": { "title": "mrs", "first": "jéssica", "last": "novaes" }, "location": { "street": "1145 rua boa vista ", "city": "santos", "state": "espírito santo", "postcode": 84624 }, "email": "jéssica.novaes@example.com", "login": { "username": "organickoala822", "password": "march", "salt": "fLoGSDZg", "md5": "6cec7aa1489c3a6ffd6e8107457970c6", "sha1": "83a76d4c22bf3451783e4a9ae085d76a1092738a", "sha256": "423df2d821284d88ac29b3a5fa7518aa5aff4ffa8799e098dffa78a4c60c7c83" }, "dob": "1949-05-27 18:49:23", "registered": "2006-06-13 20:19:51", "phone": "(76) 0422-5199", "cell": "(97) 4784-9005", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/33.jpg", "medium": "https://randomuser.me/api/portraits/med/women/33.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg" }, "nat": "BR" }, { "gender": "female", "name": { "title": "ms", "first": "ceylan", "last": "erginsoy" }, "location": { "street": "5283 doktorlar cd", "city": "sakarya", "state": "manisa", "postcode": 23082 }, "email": "ceylan.erginsoy@example.com", "login": { "username": "redmouse127", "password": "joey", "salt": "aDpkoaAV", "md5": "a19d56c0905e8ca04deee1087a08bb94", "sha1": "01a93a41bf51285239855fe6d8ec03922baf068c", "sha256": "eb6227b8a2fa5c3dc4c2f5873336fab31c31c45139c6d76f110ca134aef3ad05" }, "dob": "1956-12-28 01:24:40", "registered": "2003-08-28 10:12:57", "phone": "(807)-161-5446", "cell": "(908)-177-4664", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/19.jpg", "medium": "https://randomuser.me/api/portraits/med/women/19.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg" }, "nat": "TR" }, { "gender": "male", "name": { "title": "mr", "first": "elias", "last": "scholz" }, "location": { "street": "1919 blumenstraße", "city": "schwabach", "state": "berlin", "postcode": 27175 }, "email": "elias.scholz@example.com", "login": { "username": "greenfrog862", "password": "patricia", "salt": "0PEhBSUk", "md5": "7a3c83d71d87e4f7bf66d474009c9245", "sha1": "234a3bdf129591dceeb6f67d19541340d4b8efce", "sha256": "e62ede3d361ee5bb1b5050c460b1089feae44511421c4f4ce207659309f52fe0" }, "dob": "1976-03-14 01:02:49", "registered": "2011-03-25 05:57:08", "phone": "0755-7507774", "cell": "0179-4094937", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/49.jpg", "medium": "https://randomuser.me/api/portraits/med/men/49.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg" }, "nat": "DE" }, { "gender": "male", "name": { "title": "mr", "first": "علی رضا", "last": "قاسمی" }, "location": { "street": "9762 بلوار کشاورز", "city": "بوشهر", "state": "یزد", "postcode": 52170 }, "email": "علی رضا.قاسمی@example.com", "login": { "username": "lazydog907", "password": "737373", "salt": "CLvGIBYJ", "md5": "55af7edf64c5dc672cda47a313df7122", "sha1": "57b8f84fde608b678e012402300e5095529a6a5c", "sha256": "7c806d913d8ff80747317939563479bf762064436e16fbcb185da40d75cdd36f" }, "dob": "1958-12-06 11:08:00", "registered": "2011-01-17 01:39:49", "phone": "037-06950612", "cell": "0986-457-6000", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/20.jpg", "medium": "https://randomuser.me/api/portraits/med/men/20.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg" }, "nat": "IR" }];
        // this.addNewCards(3);
    };
    TestingCardsTwoPage.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x > 0) {
            color = '#' + hexCode + 'FF' + hexCode;
        }
        else {
            color = '#FF' + hexCode + hexCode;
        }
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    // addNewCards(count: number) {
    //   this.http.get('https://randomuser.me/api/?results=' + count)
    //     .subscribe((result: any) => {
    //       for (const val of result.results) {
    //         this.cards.push(val);         
    //       }
    //     });
    //     console.log(this.cards);
    // }
    TestingCardsTwoPage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        var numPadding = typeof (padding) === 'undefined' || padding === null ? 2 : padding;
        while (hex.length < numPadding) {
            hex = '0' + hex;
        }
        return hex;
    };
    TestingCardsTwoPage.prototype.addNewCards = function (count) {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=' + count)
            .subscribe(function (result) {
            for (var _i = 0, _a = result.results; _i < _a.length; _i++) {
                var val = _a[_i];
                _this.cards.push(val);
            }
        });
    };
    TestingCardsTwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestingCardsTwoPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_swing__["SwingStackComponent"])
    ], TestingCardsTwoPage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], TestingCardsTwoPage.prototype, "swingCards", void 0);
    TestingCardsTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-testing-cards-two',template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/testing-cards-two/testing-cards-two.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Tinder Cards</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div swing-stack #myswing1 [stackConfig]="stackConfig" id="card-stack" >\n    <ion-card #mycards1 swing-card *ngFor="let card of cards; let i = index " class="td-card" [style.z-index]="i">\n      <ion-item >\n        <img [src]="card.picture.medium">\n        <h1>{{ card.name.first }} {{ card.name.last}}</h1>\n        <p>{{ card.email }}</p>\n      </ion-item>\n      <ion-card-content>\n        From {{ card.location.city }}, {{ card.location.postcode }}<br> Phone: {{ card.phone }}\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="tinder-footer">\n    <div id="swipe_dislike" class="rate" (click)="voteUp(false)"></div>\n    <div class="info"></div>\n    <div id="swipe_like" class="rate" (click)="voteUp(true)"></div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/testing-cards-two/testing-cards-two.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TestingCardsTwoPage);
    return TestingCardsTwoPage;
}());

//# sourceMappingURL=testing-cards-two.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_results_results__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_testing_cards_two_testing_cards_two__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_topics_menu_topics__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cards_cards__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_testig_m_cards_testig_m_cards__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_swing_dist_swing_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_swing_dist_swing_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_swing_dist_swing_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_menu_xpress_menu_xpress__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_topics_menu_topics__["a" /* MenuTopicsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_testig_m_cards_testig_m_cards__["a" /* TestigMCardsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_testing_cards_two_testing_cards_two__["a" /* TestingCardsTwoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_menu_xpress_menu_xpress__["a" /* MenuXpressComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_swing_dist_swing_module__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-topics/menu-topics.module#MenuTopicsPageModule', name: 'MenuTopicsPage', segment: 'menu-topics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testig-m-cards/testig-m-cards.module#TestigMCardsPageModule', name: 'TestigMCardsPage', segment: 'testig-m-cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testing-cards-two/testing-cards-two.module#TestingCardsTwoPageModule', name: 'TestingCardsTwoPage', segment: 'testing-cards-two', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_topics_menu_topics__["a" /* MenuTopicsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_testig_m_cards_testig_m_cards__["a" /* TestigMCardsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_testing_cards_two_testing_cards_two__["a" /* TestingCardsTwoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_menu_xpress_menu_xpress__["a" /* MenuXpressComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuXpressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_results_results__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu_topics_menu_topics__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MenuXpressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuXpressComponent = (function () {
    function MenuXpressComponent(_alertCtrl, _navCtrl) {
        this._alertCtrl = _alertCtrl;
        this._navCtrl = _navCtrl;
        console.log('Hello MenuXpressComponent Component');
    }
    MenuXpressComponent.prototype.availableSoon = function () {
        var alert = this._alertCtrl.create({
            title: 'Not available yet',
            subTitle: 'Working on it, available soon',
            buttons: ['OK']
        });
        alert.present();
    };
    MenuXpressComponent.prototype.direcToMenuTopics = function () {
        var view = this._navCtrl.getActive();
        if (view.component.name != "MenuTopicsPage")
            this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_menu_topics_menu_topics__["a" /* MenuTopicsPage */]);
    };
    MenuXpressComponent.prototype.directToResuts = function () {
        var view = this._navCtrl.getActive();
        if (view.component.name != "ResultsPage")
            this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_results_results__["a" /* ResultsPage */]);
    };
    MenuXpressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'menu-xpress',template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/components/menu-xpress/menu-xpress.html"*/'<!-- Generated template for the MenuXpressComponent component -->\n<div class="containerMenu">\n  <ul>\n    <li><img class="menuSection" src="../../assets/imgs/svgs/new_card.svg" alt="addCard" (click)="availableSoon()"><br><span> Create Card</span></li>\n    <li><img class="menuSection" src="../../assets/imgs/svgs/change.svg" alt="changeTopic" (click)="direcToMenuTopics()"><br><span>Change Topic</span></li>\n    <li><img class="menuSection" src="../../assets/imgs/svgs/results.svg" alt="resuts" (click)="directToResuts()"><br><span>Results</span></li>\n  </ul>\n</div>\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/components/menu-xpress/menu-xpress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */]])
    ], MenuXpressComponent);
    return MenuXpressComponent;
}());

//# sourceMappingURL=menu-xpress.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultsPage = (function () {
    function ResultsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-results',template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/results/results.html"*/'<ion-content padding>\n  <div class="contanierResults">\n    <div class="headerContainer">\n      <h1>Select a set of cards</h1>\n    </div>\n    <div class="bodyMenuResults">\n      <div class="resultTopicSec" id="topicN" style="background-image: url(\'../../assets/imgs/MenuTopics/programingLagnaguages-min.jpg\')">\n        <div class="bacTopicSec">\n              <!-- <img src="../../assets/imgs/MenuTopics/programingLagnaguages-min.jpg" alt=""> -->\n              <h3 class="titeTopic"><ion-icon name="checkmark-circle-outline"></ion-icon>Programming Languages</h3>\n            <p>Java is the most common programming language</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <menu-xpress></menu-xpress>\n</ion-content>\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/results/results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuTopicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_cards__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuTopicsPage = (function () {
    function MenuTopicsPage(_navCtrl) {
        this._navCtrl = _navCtrl;
    }
    MenuTopicsPage.prototype.cards = function () {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cards_cards__["a" /* CardsPage */]);
    };
    MenuTopicsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuTopicsPage');
    };
    MenuTopicsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu-topics',template:/*ion-inline-start:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/menu-topics/menu-topics.html"*/'<ion-content class="contanierMenutTopics" padding>\n  <div class="headerContainer">\n    <h1>Select a set of cards</h1>\n  </div>\n  <div class="bodyMenuTopics">\n    <div (click)="cards()" class="menuTopicsSec" id="topicN" style="background-image: url(\'../../assets/imgs/MenuTopics/programingLagnaguages-min.jpg\')">\n        <div class="bacTopicSec">\n          <!-- <img src="../../assets/imgs/MenuTopics/programingLagnaguages-min.jpg" alt=""> -->\n          <h3 class="titeTopic">Programming Languages</h3>\n        </div>\n    </div>\n  </div>\n  <menu-xpress></menu-xpress>\n</ion-content>\n'/*ion-inline-end:"/Users/mmd0028/Documents/Marcos/AppsWalMart/WMirror /WM-Mirror/src/pages/menu-topics/menu-topics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MenuTopicsPage);
    return MenuTopicsPage;
}());

//# sourceMappingURL=menu-topics.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map