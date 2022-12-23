const fs = require("fs");

fs.readFile('input.txt', 'utf-8', ( error, data ) => {
    if ( error ) throw error;

    let elves = data.trim().split("\n\n");

    let calories = elves.map(( elf ) => {

        let calories = elf.split("\n").map(Number);
        return calories.reduce(( prev, curr ) => prev + curr, 0);
    });

    //part one
    console.log("Max: " + Math.max(... calories));

    //part two
    let sum = calories.sort(( a, b ) => b - a)
        .slice(0, 3)
        .reduce(( prev, curr ) => prev + curr, 0);
    console.log("Sum of top 3: " + sum);
});