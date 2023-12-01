import Day from "../../day";

export class DayOne extends Day {

    readonly partOneExample: string = '1abc2\n' + 'pqr3stu8vwx\n' + 'a1b2c3d4e5f\n' + 'treb7uchet';
    readonly partTwoExample: string = 'two1nine\n' + 'eightwothree\n' + 'abcone2threexyz\n' + 'xtwone3four\n' + '4nineeightseven2\n' + 'zoneight234\n' + '7pqrstsixteen';

    readonly partOneExampleAnswer: string = '142';
    readonly partTwoExampleAnswer: string = '281';

    constructor() { super(2023, 1); }

    partOne(input: string): string {
        let sum = 0; let combos: string[] = [];

        for (let line of input.split('\n')) {
            let chars: string[] = line.replace(/[^0-9]/g, '').split('');
            combos.push(chars[0] + chars[chars.length - 1]);
        }
        for (let comb of combos) { sum += parseInt(comb); }

        return sum.toString();
    }

    partTwo(input: string): string {

        const digits: {[index: string]: any} = {
            one   : '1',
            two   : '2',
            three : '3',
            four  : '4',
            five  : '5',
            six   : '6',
            seven : '7',
            eight : '8',
            nine  : '9',
        }

        let sum = 0; let combos: string[] = [];

        for (let line of input.split('\n')) {

            const first = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/)?.[0]
            const last = line.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)/)?.[1];

            if (!first || !last) continue;

            combos.push((digits[first] ?? first) + (digits[last] ?? last));
        }
        for (let comb of combos) { sum += parseInt(comb); }

        return sum.toString();
    }

}

export default new DayOne;
