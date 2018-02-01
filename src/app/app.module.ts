
import { ResultsPage } from './../pages/results/results';
import { TestingCardsTwoPage } from './../pages/testing-cards-two/testing-cards-two';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotificationPage } from '../pages/notification/notification';
import { MenuTopicsPage } from '../pages/menu-topics/menu-topics';
import { CardsPage } from '../pages/cards/cards';
import { TestigMCardsPage } from '../pages/testig-m-cards/testig-m-cards';
import { SwingModule } from 'angular2-swing/dist/swing.module';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MenuXpressComponent } from '../components/menu-xpress/menu-xpress';
import { CardsService } from './services/cards.service';
import { ServerService } from './services/server.services';
import { VotesService } from './services/votes.services';
import { DeckService } from './services/decks.service';
import { DecksAnsweredService } from './services/decksAnswered.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotificationPage,
    MenuTopicsPage,
    CardsPage,
    TestigMCardsPage,
    TestingCardsTwoPage,
    ResultsPage,
    MenuXpressComponent
  ],
  imports: [
    BrowserModule,
    SwingModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotificationPage,
    MenuTopicsPage,
    CardsPage,
    TestigMCardsPage,
    TestingCardsTwoPage,
    ResultsPage,
    MenuXpressComponent
  ],
  providers: [
    StatusBar,
    ServerService,
    VotesService,
    CardsService,
    DeckService,
    DecksAnsweredService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
