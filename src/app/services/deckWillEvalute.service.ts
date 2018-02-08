import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DecksWillEvaluatePT {
    testing = true;
    constructor(private http: Http) {}
    
    GetxpressIdThingsToEvaluate(idDeck: number, idAssociate: number){
        return this.http.get('http://localhost:3000/xpressPTTBEByDeck/api/thingsToEvaluate/' + idDeck + '&' + idAssociate);
    }


}
