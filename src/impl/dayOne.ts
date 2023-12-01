import Day from "../day";

import path from 'path';
import fs   from 'fs';

const input = fs.readFileSync(path.join(__dirname, '../../public/dayOne.txt'), 'utf8');

export class CayOne extends Day {

    constructor() { super(1, input); }

    partOne(): string {
        let sum = 0; let combos: string[] = [];

        for (let line of input.split('\n')) {
            let chars: string[] = line.replace(/[^0-9]/g, '').split('');
            combos.push(chars[0] + chars[chars.length - 1]);
        }
        for (let comb of combos) { sum += parseInt(comb); }

        return sum.toString();
    }

    partTwo(): string {

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

export default new CayOne;