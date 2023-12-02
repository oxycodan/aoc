import RequireAll from 'require-all';
import path       from "path";

const YEAR_RANGE = [2015, 2023];
const DAY_RANGE  = [1, 25];

const isInRange = (range: number[], value: number): boolean => value >= range[0] && value <= range[1];

const config = {
    year : 2023,
    day  : 0,
};

const main = async () => {

    // parse all solution classes
    const days = [];

    for (let year = YEAR_RANGE[0]; year <= YEAR_RANGE[1]; year++) {

        const yearDays = RequireAll({
            dirname: path.join(__dirname, `../dist/impl/${year}/`),
            filter: /^(?!-)(.+)\.js$/,
            recursive: true
        });

        for (let day in yearDays)  {days.push(yearDays[day]); }
    }

    // filter solutions based on config
    // out of range = include all
    let solutions = [];

    solutions = days.filter(day => {
        if (config.year !== 0 && config.year !== day.default.year) return false;
        return !(config.day !== 0 && config.day !== day.default.day);
    });

    // run solutions and print results
    solutions.forEach(solution => {

        console.log(`=====================`);
        console.log(`Year: ${solution.default.year} | Day: ${solution.default.day} | Test: ${solution.default.test() ? 'Passed' : 'Failed'}`);
        console.log(`Part One Solution: ${solution.default.partOne(solution.default.input)}`);
        console.log(`Part Two Solution: ${solution.default.partTwo(solution.default.input)}`);
        console.log();
    });
}

main().then(() => {}).catch(e => console.error(e));
