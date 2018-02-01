import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class VotesService {
    testing = true;
    constructor(private http: Http) {}

    PostVote(idcard, idAssociate, vote, idToEvaluatePT){
        if (this.testing){
            // const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8'});
            if (idcard === null)
                idcard = 0;
            if (idAssociate === null)
                idAssociate = 0;
            if (idToEvaluatePT === null)
                idAssociate = 0;

            var jsonInfo = {
                'idCard': idcard,
                'idAssociate': idAssociate,
                'idToEvaluate': idToEvaluatePT,
                'vote': vote
            };

            var toSend = JSON.stringify(jsonInfo);
            console.log(toSend);
            return this.http.post('http://localhost:3000/xpressVotesCards/api/createVoteCards', toSend);
            //.map((res:Response) => res.json());
        }
    }
}