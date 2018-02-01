import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class CardsService {
    testing = true;
    constructor(private http: Http) {}
    GetxpressCardsByIdDeck(idAssociate, idDeck){
        //const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8'});
        return this.http.get('http://localhost:3000/xpressCards/api/getCardsNoVoteYetByIdDeck/' + idAssociate + '&' + idDeck);//.map((res:Response) => res.json());
    }

    GetxpressCardsNVPTByIdDeck(idAssociate, idDeck){
        return this.http.get('http://localhost:3000/xpressCards/api/getCardsNVPTByIdDeck/' + idAssociate + '&' + idDeck);//.map((res:Response) => res.json());
    }
}
