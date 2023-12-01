import Day from "@src/day";

const area = (l: number, w: number, h: number) => 2*l*w + 2*w*h + 2*h*l;

export class DayTwo extends Day {

    readonly partOneExample       : string = '2x3x4';
    readonly partTwoExample       : string = '2x3x4';

    readonly partOneExampleAnswer : string = '58';
    readonly partTwoExampleAnswer : string = '34';

    constructor() { super(2015, 2); }

    partOne(input: string): string {

        let total = 0;

        for (let line of input.split('\n')) {

            const [l, w, h] = line.split('x').map(Number);
            total += area(l, w, h) + Math.min(l*w, w*h, h*l);
        }

        return total.toString();
    }

    partTwo(input: string): string {

        let total = 0;

        for (let line of input.split('\n')) {

            const [l, w, h] = line.split('x').map(Number);

            const perimeters = [2*l + 2*w, 2*w + 2*h, 2*h + 2*l];
            const shortestPerimeter = Math.min(...perimeters);

            total += l*w*h + shortestPerimeter;
        }

        return total.toString();
    }
}

export default new DayTwo;
