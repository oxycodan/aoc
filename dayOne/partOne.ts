const input = '';

let sum = 0; let lines: string[] = input.split('\n'); let combs: string[] = [];

for (let line of lines) {
    let chars: string[] = line.replace(/[^0-9]/g, '').split('');
    combs.push(chars[0] + chars[chars.length - 1]);
}
for (let comb of combs) { sum += parseInt(comb); }

console.log(sum)
