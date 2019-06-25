import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../../lib/service/pga/pga.model';
@Component({
    selector: 'player',
    templateUrl: './player.html',
    styleUrls: [ './player.scss' ]
})
export class PlayerComponent implements OnInit {
    @Input()
    player: Player;
    
    constructor() {}

    ngOnInit() {}
}