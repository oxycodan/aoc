import Day from "@src/day";


class Card {

    winningNumbers : number[];
    rolls          : number[];

    constructor(winningNumbers: string, rolls: string) {
        this.winningNumbers = winningNumbers.split(' ').filter(n => n !== '').map(n => parseInt(n));
        this.rolls          = rolls.split(' ').filter(n => n !== '').map(n => parseInt(n));
    }

    get points(): number {

        let points = 0;

        this.rolls.forEach(roll => { if (this.winningNumbers.includes(roll)) { if (points === 0) points = 1; else points *= 2; }});

        return points;
    }
}

const parseInput = (input: string) => input.split('\n').map(l => l.split(': ')[1].split(' | '));

export class DayOne extends Day {

    readonly partOneExample       : string = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\n' +
        'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\n' +
        'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\n' +
        'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\n' +
        'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\n' +
        'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11';
    readonly partTwoExample       : string = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\n' +
        'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\n' +
        'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\n' +
        'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\n' +
        'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\n' +
        'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11';

    readonly partOneExampleAnswer : string = '13';
    readonly partTwoExampleAnswer : string = '30';

    constructor() { super(2023, 4); }

    partOne(input: string): string {

        let ipt = parseInput(input);
        let sum  = 0;

        ipt.forEach((card, i) => { sum += new Card(card[0], card[1]).points; });

        return sum.toString();
    }

    partTwo(input: string): string {

        let copies : number[]     = [];
        let ipt    : string[][] = parseInput(input);
        let sum    : number     = 0;

        const cards = ipt.map(card => new Card(card[0], card[1]));

        cards.forEach((card, i) => {

            if (card.points === 0) return;

            if (copies[i] === undefined) copies[i] = 1;

            for (let j = i+1; j < card.points + 1; j++) {

                if (copies[i+1+j] === undefined) copies[i+1+j] = 1;

                copies[i+1+j] += copies[i];
            }

        });

        return sum.toString();
    }
}

export default new DayOne;
