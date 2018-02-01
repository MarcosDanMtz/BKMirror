import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ServerService {
    testing = true;
    constructor(private http: Http) {}
    GetxpressDecks(deckEndpoints){
        if (this.testing){
            //const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8'});
            return this.http.get('http://localhost:3000/xpressDeck/api' + deckEndpoints);
            //.map((res:Response) => res.json());
        }
    }

    GetxpressCards(cardsEndpoints){
        //const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8'});
        return this.http.get('http://localhost:3000/xpressCards/api' + cardsEndpoints);//.map((res:Response) => res.json());
    }
}
