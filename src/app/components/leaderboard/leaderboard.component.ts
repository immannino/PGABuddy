import { Component, OnInit } from '@angular/core';
import { PGAService } from '../../../lib/service/pga/pga.service';
import { StateService, State } from '../../../lib/service/state/state.service';
import { Player } from '../../../lib/service/pga/pga.model';

import { repeat, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'leaderboard',
    templateUrl: './leaderboard.html',
    styleUrls: [ './leaderboard.scss' ]
})
export class LeaderboardComponent implements OnInit {
    constructor(private pga: PGAService, private stateService: StateService) {
        this.stateService.stateSubject.subscribe((state) => {
            this.state = state;
        });
    }

    state: State;
    shouldRefresh: boolean = false;
    seconds: number = 5;
    
    trimDate = (date): string =>  String(date).substring(11);
    filterPosition = (player: Player): string => player.status.toLowerCase() === 'cut' ? 'CUT' : player.current_position;
    isCut = (player: Player): boolean => player.status.toLowerCase() === 'cut' ? true : false;
    filterScore = (score: number): string => score > 0 ? "+" + score : score < 0 ? String(score) : "E";
    setScoreColor = (score: number) => score > 0 ? 'green' : score < 0 ? 'red' : 'black';

    ngOnInit() {
        this.state = this.stateService.getState();
    }

    toggleRefresh(e) {
        this.shouldRefresh = e.target.checked;

        if (this.shouldRefresh) this.autoRefresh();
    }

    autoRefresh() {
        const delayed = of({}).pipe(delay(this.seconds * 1000));
        delayed.subscribe(() => {
            this.pga.getTournamentData(this.state.currentMeta.tid).subscribe((data) => {
                console.log("Auto Refresh");
                const tempState = this.stateService.getState();
                this.stateService.updateState({
                    ...tempState,
                    tournamentData: data
                });

                if (this.shouldRefresh) this.autoRefresh();
            }); 
        });
    }
}