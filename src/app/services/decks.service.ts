import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DeckService {
    testing = true;
    constructor(private http: Http) {}
    
    GetxpressAllDecksForAnsByIdUser(idAssociate){
        //const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8'});
        return this.http.get('http://localhost:3000/xpressDeck/api/getDecksForAnsByIdUser/' + idAssociate);//.map((res:Response) => res.json());
    }
}
