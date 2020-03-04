var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

const main = () => {
    rl.on("line", function(line) {
        const args = line.split("(");
        store_cli(args);
    });
};

const store_cli = (args) => {
    console.log(args);
    console.log(...args);
};

main();
