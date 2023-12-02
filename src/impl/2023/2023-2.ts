import Day from "@src/day";

const RED = 12, GREEN = 13, BLUE = 14;

const isPossible = (red: number, green: number, blue: number): boolean => {
    if (red < 0 || green < 0 || blue < 0) return false;
    return red <= RED && green <= GREEN && blue <= BLUE;
}

const parseSetColors = (set: string): { red: number, green: number, blue: number } => {
    let red   = parseInt(set.match(/(\d+) red/)?.[1] ?? '0');
    let green = parseInt(set.match(/(\d+) green/)?.[1] ?? '0');
    let blue  = parseInt(set.match(/(\d+) blue/)?.[1] ?? '0');
    return { red, green, blue };
}

export class DayTwo extends Day {

    readonly partOneExample       : string =
        'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n' +
        'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n' +
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n' +
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n' +
        'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green';

    readonly partTwoExample       : string =
        'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n' +
        'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n' +
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n' +
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n' +
        'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green';

    readonly partOneExampleAnswer : string = '8';
    readonly partTwoExampleAnswer : string = '2286';

    constructor() { super(2023, 2); }

    partOne(input: string): string {

        let sum = 0;

        for (let line of input.split('\n')) {

            const [gameId, colors] = line.replace('Game ', '').split(':').map(str => str.trim());

            const drawSets = colors.split(';').map(str => str.trim());

            let isPossibleSet = true;
            for (let set of drawSets.map(set => parseSetColors(set))) {
                if (!isPossible(set.red, set.green, set.blue)) isPossibleSet = false;
            }

            if (isPossibleSet) sum += parseInt(gameId);
        }

        return sum.toString();
    }

    partTwo(input: string): string {

        let sum = 0;
        
        for (let line of input.split('\n')) {

            const [gameId, colors] = line.replace('Game ', '').split(':').map(str => str.trim());

            const drawSets = colors.split(';').map(str => str.trim());

            let largestRed = 0, largestGreen = 0, largestBlue = 0;
            for (let set of drawSets.map(set => parseSetColors(set))) {
                largestRed   = Math.max(largestRed, set.red);
                largestGreen = Math.max(largestGreen, set.green);
                largestBlue  = Math.max(largestBlue, set.blue);
            }

            sum += largestRed * largestGreen * largestBlue;
        }

        return sum.toString();
    }
}

export default new DayTwo;
