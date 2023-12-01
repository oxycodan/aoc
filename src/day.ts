import fs from "fs";
import path from "path";

export default class Day {

    readonly partOneExample       : string = '';
    readonly partTwoExample       : string = '';

    readonly partOneExampleAnswer : string = '';
    readonly partTwoExampleAnswer : string = '';

    year                          : number;
    day                           : number;


    constructor(year: number, day: number) {
        this.year  = year;
        this.day   = day;
    }

    get input(): string {
        return fs.readFileSync(path.join(__dirname, `../public/${this.year}/${this.day}.txt`), 'utf8');
    }


    partOne(input: string): string { return "Not implemented"; }

    partTwo(input: string): string { return "Not implemented"; }

    test(): boolean {
        return this.partOne(this.partOneExample) === this.partOneExampleAnswer &&
               this.partTwo(this.partTwoExample) === this.partTwoExampleAnswer;
    }
}
