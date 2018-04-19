import { Card } from './card.model';

export class Counters {
    card: string;
    weakAgainst: {
        hard: Card[];
        soft: Card[];
    };
    strongAgainst: {
        hard: Card[];
        soft: Card[];
    };
    synergies: {
        hard: Card[];
        soft: Card[];
    }
}