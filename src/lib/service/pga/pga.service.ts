import { Injectable } from "@angular/core";
import { CurrentTournament, TournamentData } from './pga.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as data from './leaderboard-test.json';

@Injectable()
export class PGAService {
    urls = {
        "meta": "https://statdata.pgatour.com/r/current/message.json",
        "season-stats": "https://statdata.pgatour.com/r/stats/2018/186.json",
        "player-tournament-stats": "https://statdata.pgatour.com/r/493/player_stats.json",
        "tournament-leaderboard": "https://statdata.pgatour.com/r/current/leaderboard-v2.json",
        "tournament-players": "https://statdata.pgatour.com/r/490/field.json",
        "url": "https://statdata.pgatour.com/r/034/scorecards/"
    };

    constructor(private http: HttpClient) {}

    getCurrentTournamentId(): Observable<CurrentTournament> {
        return this.http.get<CurrentTournament>(this.urls.meta);
    }

    getTournamentData(tournamentId: string): Observable<TournamentData> {
        let url: string = "https://statdata.pgatour.com/r/" + tournamentId + "/leaderboard-v2mini.json";
        return Observable.create((next) => {
            next.next(data);
        });
        // return this.http.get<TournamentData>(this.data);
    }
}