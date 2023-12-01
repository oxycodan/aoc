import Day from "../../day";

export class DayOne extends Day {

    readonly partOneExample       : string = ')())())';
    readonly partTwoExample       : string = '()())';

    readonly partOneExampleAnswer : string = '-3';
    readonly partTwoExampleAnswer : string = '5';

    constructor() { super(2015, 1); }

    partOne(input: string): string {

         let floor = 0;

         for (let char of input) { if (char === '(') floor++; if (char === ')') floor--; }

         return floor.toString();
    }

    partTwo(input: string): string {

        let floor = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[i] === '(') floor++;
            if (input[i] === ')') floor--;
            if (floor === -1) return (i + 1).toString();
        }

        return '0';
    }
}

export default new DayOne;
