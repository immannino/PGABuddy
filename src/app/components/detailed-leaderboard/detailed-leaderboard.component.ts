import { Component, OnInit } from "@angular/core";
import { StateService, State } from 'src/lib/service/state/state.service';
import { PGAService } from 'src/lib/service/pga/pga.service';

@Component({
    selector: 'detailed-leaderboard',
    templateUrl: './detailed-leaderboard.html',
    styleUrls: [ './detailed-leaderboard.scss']
})
export class DetailedLeaderboardComponent implements OnInit {
    constructor(private stateService: StateService) {
        this.stateService.stateSubject.subscribe((state) => {
            this.state = state;
        });
    }

    state: State;

    ngOnInit() {
        this.state = this.stateService.getState();
    }
}