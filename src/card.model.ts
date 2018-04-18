export class Card {
    name: string;
    level: number;
    maxLevel: number;
    count: number;
    rarity: string;
    requiredForUpgrade: string | number;
    leftToUpgrade?: number;
    icon: string;
    key: string;
    elixir: number;
    type: string;
    arena: number;
    description: string;
    id: number
}