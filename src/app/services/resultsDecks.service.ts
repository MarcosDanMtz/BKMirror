import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ResutDeckService {
    testing = true;

    constructor(private http: Http) {}

    PATCHxpressDeckByETUFDC(idCard, idDeck){
        var body = {
            'idCard': idCard,
            'IdDeck': idDeck
        };
        var toSendjson = JSON.stringify(body);
        console.log(toSendjson);
        return this.http.post('http://localhost:3000/xpressResultsDeck/api/updateResultByIdDeck', toSendjson);//.map((res:Response) => res.json());
    }
}





