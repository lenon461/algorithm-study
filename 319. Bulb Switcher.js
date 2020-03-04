const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [[[3], 1]];

var checkStraightLine = function(coordinates) {
    const gradient = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);
    const y_intercept = coordinates[0][1] - gradient * coordinates[0][0];
    return coordinates.every((coordinate) => {
        return coordinate[1] == gradient * coordinate[0] + y_intercept;
    });
};
runTest(checkStraightLine, testCase(data));
