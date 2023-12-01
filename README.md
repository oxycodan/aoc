# Advent of Code | TypeScript Solutions

### How to run

```bash
npm install
npm run build
npm start
```

### User Input
`./public/<year>/<day>.txt` contains user input such as for 2023 day one: `./public/2023/1.txt`.

### Example Output
```bash
> aoc@1.1.0 start            
> node dist/index.js

=====================
Year: 2015 | Day: 1 | Test: Passed
Part One Solution: 138            
Part Two Solution: 1771   
```

### Configuartion
`./src/inedx.ts` contains a config object that can be used to filter which years, days, and parts are displayed.
```typescript
const config = {
    year : 0,
    day  : 0,
    part : 0
}; // this will display every year, day, and part
```

If a config value is set to `0` or is invalid, filtering will be ignored.  

```typescript
const config = {
    year : 2023,
    day  : 1,
    part : 1
}; // this will display only 2023 day 1 part 1
```



