import { Component, OnInit } from "@angular/core";
import { PGAService } from '../../lib/service/pga/pga.service';
import { StateService, State } from 'src/lib/service/state/state.service';
import { CurrentTournament, TournamentData } from '../../lib/service/pga/pga.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    styleUrls: [ './dashboard.scss' ]
})
export class DashboardComponent implements OnInit {
    state: State;

    constructor(private pga: PGAService, private stateService: StateService) {
        this.stateService.stateSubject.subscribe((state) => {
            this.state = state;
        });
    }

    ngOnInit() {
        this.state = this.stateService.getState();
        
        // this.pga.getCurrentTournamentId().subscribe((data: CurrentTournament) => {
        //     this.stateService.updateState({
        //         currentMeta: data,
        //         tournamentData: null
        //     });

            this.pga.getTournamentData(null).subscribe((tournamentData: any) => {
                console.log(tournamentData);
                const tempState = this.stateService.getState();

                this.stateService.updateState({
                    ...tempState,
                    tournamentData: tournamentData.default
                });
            });
        // });
    }
}