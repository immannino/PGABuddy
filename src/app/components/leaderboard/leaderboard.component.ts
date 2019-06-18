import { Component, OnInit } from '@angular/core';
import { PGAService } from '../../../lib/service/pga/pga.service';
import { StateService, State } from '../../../lib/service/state/state.service';

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

    ngOnInit() {
        this.state = this.stateService.getState();
    }
}