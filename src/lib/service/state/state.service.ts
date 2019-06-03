import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { CurrentTournament, TournamentData } from '../pga/pga.model';

@Injectable()
export class StateService {
    constructor() {}

    state: State = {
        currentMeta: null,
        tournamentData: null
    };
    
    stateSubject: Subject<State> = new Subject<State>();

    getState(): State {
        return this.state;
    }

    setState(newState: State) {
        this.state = {
            ...this.state,
            ...newState
        };
    }

    updateState(newState: State) {
        this.setState(newState);
        this.stateSubject.next(this.getState());
    }
}

export class State {
    currentMeta: CurrentTournament;
    tournamentData: TournamentData;
}