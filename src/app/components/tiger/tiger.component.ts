import { Component, OnInit } from '@angular/core';
import { PGAService } from 'src/lib/service/pga/pga.service';
import { StateService, State } from 'src/lib/service/state/state.service';

@Component({
    selector: 'tiger',
    templateUrl: './tiger.html',
    styleUrls: [ './tiger.scss']
})
export class TigerComponent implements OnInit {
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