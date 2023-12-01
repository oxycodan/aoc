import RequireAll from 'require-all';
import path       from "path";

const START_YEAR = 2015;
const END_YEAR   = 2023;

const START_DAY    = 1;
const END_DAY     = 25;

const isValidYear = (year: number) => year >= START_YEAR && year <= END_YEAR;
const isValidDay  = (day: number)  => day  >= START_DAY  && day  <= END_DAY;
const isValidPart = (part: number) => part === 1 || part === 2;

const config = {
    year : 2015,
    day  : 0,
    part : 0
};

const main = async () => {

    const days = [];

    for (let year = START_YEAR; year <= END_YEAR; year++) {

        const yearDays = RequireAll({
            dirname: path.join(__dirname, `../dist/impl/${year}/`),
            filter: /^(?!-)(.+)\.js$/,
            recursive: true
        });

        for (let day in yearDays) {
            days.push(yearDays[day]);
        }
    }

    let solutions = [];

    // based on config, find the correct solutions to push to array

    solutions = days.filter(day => {
        if (!isValidYear(config.year)) {
            return true;
        }

        if (!isValidDay(config.day)) {
            return day.default.year === config.year;
        }

        return day.default.year === config.year && day.default.day === config.day && isValidPart(config.part);
    });

    solutions.forEach(solution => {
        console.log(`=====================`);
        console.log(`Year: ${solution.default.year} | Day: ${solution.default.day} | Test: ${solution.default.test() ? 'Passed' : 'Failed'}`);

        if (config.part === 1 || !isValidPart(config.part)) {
            console.log(`Part One Solution: ${solution.default.partOne(solution.default.input)}`);
        }

        if (config.part === 2 || !isValidPart(config.part)) {
            console.log(`Part Two Solution: ${solution.default.partTwo(solution.default.input)}`);
        }

        console.log();
    });
}

main().then(() => {}).catch(e => console.error(e));
