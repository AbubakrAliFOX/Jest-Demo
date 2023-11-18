const {default: TestRunner} = require('jest-runner');
const addFive = require("./addFive");


test('Adds five', () => {
    expect(addFive(3)).toBe(8);
})