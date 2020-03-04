const readline = require("readline");
const { log } = require("console");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const N = parseInt(input[0].split(" ")[0], 10);
    const K = parseInt(input[0].split(" ")[1], 10);
    const poss = input[1].split(" ").map((val) => parseInt(val, 10));
    FindleastUnhappiness(N, K, poss);
    process.exit();
});

const FindleastUnhappiness = (WaterSource, House, WaterSourcePoss) => {
    WaterSourcePoss.sort();

    const result = {};
    const div = (a, b, result) => {
        let possibleHouses = 0;
        let q = a - b;
        let index = 1;
        while (q > 0) {
            if (possibleHouses >= House) break;
            if (!result[`${index}`]) result[`${index}`] = 0;
            let odd = q > 2 ? 2 : 1;
            result[`${index}`] = result[`${index}`] + odd;
            q = q - 2;
            possibleHouses += result[`${index}`];
            index++;
        }
        return result;
    };
    for (let i = 0; i < WaterSourcePoss.length - 1; i++) {
        const source = WaterSourcePoss[i];
        const nextsource = WaterSourcePoss[i + 1];

        div(nextsource, source, result);
    }
    Object.keys(result).map((val) => (result[`${val}`] += 2));

    console.log(result);
    const Unhappiness = (House) => {
        let h = House;

        let index = 1;
        let Unhappiness = 0;
        while (1) {
            if (h <= 0) return Unhappiness;
            else {
                h = h - result[`${index}`];

                if (h >= 0) {
                    Unhappiness += index * result[`${index}`];
                } else {
                    Unhappiness += index * (h + result[`${index}`]);
                }
            }
            index++;
        }
    };
    return log(Unhappiness(House));
};
