// For the Polybius square (example: polybius("message") => "23513434112251"), the tests that you write should test that the following is true:
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    describe("encoding a message", () => {
        it("when encoding, it translate the letters i and j to 42.", () => {
            const message = "message";
            const actual = polybius(message);
            const expected = "23513434112251";

            expect(actual).to.equal(expected);
        });
        it("it ignores capital letters", () => {
            const message = "Message";
            const actual = polybius(message);
            const expected = "23513434112251";

            expect(actual).to.equal(expected);
        });
        it("it maintains space in the message, before and after encoding or decoding.", () => {
            const message = "A message";
            const actual = polybius(message);
            const expected = "11 23513434112251";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("when decoding, it translate 42 to (i/j).", () => {
            const message = "23513434112251";
            const actual = polybius(message, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        });
    })
});

