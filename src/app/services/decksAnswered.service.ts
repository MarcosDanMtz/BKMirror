import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DecksAnsweredService {
    testing = true;
    constructor(private http: Http) {}
    PostxpressDecksAns(idAssociate: number, idDeck: number){
        if (this.testing){
            var toSend= {
                'idDeck': idDeck,
                'idAssociate': idAssociate
            };

            var toSendjson = JSON.stringify(toSend);
            //const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8'});
            return this.http.post('http://localhost:3000/xpressDecksAnswered/api/registrerDeckAnswered', toSendjson);
            //.map((res:Response) => res.json());
        }
    }

    GetxpressDecksAnsByIdAss(idAssociate){
        return this.http.get('http://localhost:3000/xpressDecksAnswered/api/decksAnsById/' + idAssociate);
    }


}
