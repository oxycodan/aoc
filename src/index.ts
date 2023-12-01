import RequireAll from 'require-all';
import path       from "path";

const main = async () => {

    const days = RequireAll({
        dirname: path.join(__dirname, '../dist/impl/'),
        filter: /^(?!-)(.+)\.js$/,
        recursive: true
    });

    for (let day in days) {
        console.log(`Advent of Code 2023 - Day ${days[day].default.day}`);
        console.log(`=======================================`);
        console.log(days[day].default.partOne());
        console.log(days[day].default.partTwo());
        console.log(`=======================================`);
    }
}

main().then(() => {}).catch(e => console.error(e));
