const fs = require('fs');

fs.readFile('input.txt', 'utf-8', ( error, data ) => {
    if ( error ) throw error;

    const rows = data.trim().split('\n').map((row) => row.split(" "));

    const move = {
        sten : 1,
        papper : 2,
        sax : 3,
    };

    const mapInput = {
        A : move.sten,
        B : move.papper,
        C : move.sax,
        X : move.sten,
        Y : move.papper,
        Z : move.sax,
    };

    const score = (opponentMove, ourMove) => {

        if( opponentMove === ourMove ) return ourMove + 3;

        if (
            ( opponentMove === move.sten && ourMove === move.papper ) ||
            ( opponentMove === move.papper && ourMove === move.sax ) ||
            ( opponentMove === move.sax && ourMove === move.sten )
        ) return ourMove + 6;

        else return ourMove;
    }

    const solution = {

        A: {

            X : move.sax,
            Y : move.sten,
            Z : move.papper,
        },
        B : {
            X : move.sten,
            Y : move.papper,
            Z : move.sax,
        },
        C : {
            X : move.papper,
            Y : move.sax,
            Z : move.sten,
        },
    };

    const outcome1 = rows.map((row) => {

        let opponentMove = mapInput[row[0]];
        let ourMove = mapInput[row[1]];
        return score(opponentMove, ourMove);
    });

    const outcome2 = rows.map((row) => {

        let opponentMove = mapInput[row[0]];
        let ourMove = solution[row[0]][row[1]];
        return score(opponentMove, ourMove);
    })

    console.log(outcome1.reduce((a, b) => a + b, 0));
    console.log(outcome2.reduce((a, b) => a + b, 0));
});