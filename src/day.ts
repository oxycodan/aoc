import fs from "fs";
import path from "path";

export default class Day {

    year  : number;
    day   : number;


    constructor(year: number, day: number) {
        this.year  = year;
        this.day   = day;
    }

    get input(): string {
        return fs.readFileSync(path.join(__dirname, `../public/${this.year}/${this.day}.txt`), 'utf8');
    }

    partOne(): string { return "Not implemented"; }

    partTwo(): string { return "Not implemented"; }
}
