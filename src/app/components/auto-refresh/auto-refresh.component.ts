import { Component, OnInit } from "@angular/core";
import { PGAService } from '../../../lib/service/pga/pga.service';
import { StateService, State } from '../../../lib/service/state/state.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'auto-refresh',
    templateUrl: './auto-refresh.html',
    styleUrls: [ './auto-refresh.scss' ]
})
export class AutoRefreshComponent implements OnInit {

    constructor(private pga: PGAService, private stateService: StateService) {
        this.stateService.stateSubject.subscribe((state) => {
            this.state = state;
        });
    }

    state: State;
    shouldRefresh: boolean = false;
    seconds: number = 30;

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