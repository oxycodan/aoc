import RequireAll from 'require-all';
import path       from "path";

const START_YEAR = 2015;
const END_YEAR   = 2023;

const START_DAY   = 1;
const END_DAY     = 25;

const isValidYear = (year: number) => year >= START_YEAR && year <= END_YEAR;
const isValidDay  = (day: number)  => day  >= START_DAY  && day  <= END_DAY;

const config = {
    year : 2015,
    day  : 3,
};

const main = async () => {

    // parse all solution classes
    const days = [];

    for (let year = START_YEAR; year <= END_YEAR; year++) {

        const yearDays = RequireAll({
            dirname: path.join(__dirname, `../dist/impl/${year}/`),
            filter: /^(?!-)(.+)\.js$/,
            recursive: true
        });

        for (let day in yearDays)  {days.push(yearDays[day]); }
    }

    // filter solutions based on config
    let solutions = [];

    solutions = days.filter(day => {

        if (!isValidYear(config.year)) { return true; }

        if (!isValidDay(config.day)) { return day.default.year === config.year; }

        return day.default.year === config.year && day.default.day === config.day;
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
