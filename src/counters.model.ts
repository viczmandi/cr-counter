import { Card } from './card.model';

export class Counters {
    card: string;
    countersTo: {
        hard: Card[];
        soft: Card[];
    };
    countersThese: {
        hard: Card[];
        soft: Card[];
    };
    synergies: {
        hard: Card[];
        soft: Card[];
    }
}