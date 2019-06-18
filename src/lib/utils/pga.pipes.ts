import { Pipe, PipeTransform } from "@angular/core";
import { Player } from '../service/pga/pga.model';
import { isCut } from './pga.utils';

@Pipe({ name: 'scoreColor' })
export class ScoreColorPipe implements PipeTransform {
    transform = (score: number) => score > 0 ? 'green' : score < 0 ? 'red' : 'black';
}

@Pipe({ name: 'trimDatestring' })
export class TrimDatePipe implements PipeTransform {
    transform = (date): string =>  String(date).substring(11);
}

@Pipe({ name: 'filterPositionText' })
export class FilterPositionPipe implements PipeTransform {
    transform = (player: Player): string => isCut(player.status) ? 'CUT' : player.current_position;
}

@Pipe({ name: 'filterScoreText' })
export class FilterScorePipe implements PipeTransform {
    transform = (score: number): string => score > 0 ? "+" + score : score < 0 ? String(score) : "E";
}

@Pipe({ name: 'isCutPipe' })
export class IsCutPipe implements PipeTransform {
    transform = (player: Player): boolean => isCut(player.status);
}


