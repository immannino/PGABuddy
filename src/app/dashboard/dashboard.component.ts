import { Component, OnInit } from "@angular/core";
import { PGAService } from '../../lib/service/pga/pga.service';
import { StateService } from 'src/lib/service/state/state.service';
import { CurrentTournament, TournamentData } from '../../lib/service/pga/pga.model';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    styleUrls: [ './dashboard.scss' ]
})
export class DashboardComponent implements OnInit {
    constructor(private pga: PGAService, private state: StateService) {}

    ngOnInit() {
        this.pga.getCurrentTournamentId().subscribe((data: CurrentTournament) => {
            this.state.updateState({
                currentMeta: data,
                tournamentData: null
            });

            this.pga.getTournamentData(data.tid).subscribe((tournamentData: TournamentData) => {
                const tempState = this.state.getState();

                this.state.updateState({
                    ...tempState,
                    tournamentData: tournamentData
                });
            });
        });
    }
}