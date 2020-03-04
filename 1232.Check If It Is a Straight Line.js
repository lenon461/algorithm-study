const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [
        [
            [
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
                [5, 6],
                [6, 7],
            ],
        ],
        true,
    ],
    [
        [
            [
                [1, 1],
                [2, 2],
                [3, 4],
                [4, 5],
                [5, 6],
                [7, 7],
            ],
        ],
        false,
    ],
];

var checkStraightLine = function(coordinates) {
    const gradient = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);
    const y_intercept = coordinates[0][1] - gradient * coordinates[0][0];
    return coordinates.every((coordinate) => {
        return coordinate[1] == gradient * coordinate[0] + y_intercept;
    });
};
runTest(checkStraightLine, testCase(data));
