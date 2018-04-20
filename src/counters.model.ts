import { Card } from './card.model';

export class Counters {
    card: string = '';
    weakAgainst:any = {
        'hard': new Array<Card>(),
        'soft': new Array<Card>()
    };
    strongAgainst:any = {
        'hard': new Array<Card>(),
        'soft': new Array<Card>()
    };
    synergies:any = {
        'hard': new Array<Card>(),
        'soft': new Array<Card>()
    };
}