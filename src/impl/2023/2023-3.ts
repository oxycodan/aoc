import Day from "@src/day";

const isSymbol = (symbol: string) => symbol !== '.' && isNaN(parseInt(symbol));
const isNumber = (symbol: string) => !isNaN(parseInt(symbol));

export class DayThree extends Day {

    readonly partOneExample       : string = '467..114..\n' +
        '...*......\n' +
        '..35..633.\n' +
        '......#...\n' +
        '617*......\n' +
        '.....+.58.\n' +
        '..592.....\n' +
        '......755.\n' +
        '...$.*....\n' +
        '.664.598..';
    readonly partTwoExample       : string = '';

    readonly partOneExampleAnswer : string = '4361';
    readonly partTwoExampleAnswer : string = '0';

    constructor() { super(2023, 3); }

    partOne(input: string): string {

        let sum = input.match(/(\d*(?<=[^\d.\n\r].{140,142})\d+)|(\d+(?=.{140,142}[^\d.\n\r])\d*)|((?<=[^\d.\n\r])\d+)|(\d+(?=[^\d.\n\r]))/gs)?.reduce((p,c) => p+ +c, 0);
        // this is correct. it loops through the matrix (input) and finds all the numbers that border a symbol (horz, vert, diag) and adds them up.
        // secondary solving method
        let sum1 = 0;

        let matrix = input.split('\n').map(r => r.split(''));

        // create an x and y coordinate for each entry in the matrix
        let coords = matrix.map((r, y) => r.map((c, x) => ({x, y})));

        // loop through each coordinate
        for (let y = 0; y < coords.length; y++) {
            for (let x = 0; x < coords[y].length; x++) {

                // if the coordinate is a number
                if (isNumber(matrix[y][x])) {

                   // get the surrounding coordiantes to check for symbols, or if the digit is part of a bigger number
                     let surroundingCoords = [
                          coords[y-1]?.[x-1],
                          coords[y-1]?.[x],
                          coords[y-1]?.[x+1],
                          coords[y]?.[x-1],
                          coords[y]?.[x+1],
                          coords[y+1]?.[x-1],
                          coords[y+1]?.[x],
                          coords[y+1]?.[x+1],
                     ];


                }





            }
        }

        console.log(sum1);

        if (!sum) throw new Error('No sum found');

        return sum.toString();
    }

    partTwo(input: string): string {

        let sum = 0;

        return sum.toString();
    }
}

export default new DayThree;
