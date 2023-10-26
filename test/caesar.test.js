// For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should test that the following is true:
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
    describe("error handling", () => {
        it("should return false if the shift value is equal to 0", () => {
            const message = "zebra magazine";
            const shift = 0;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
        it("should return false if the shift value is less than -25", () => {
            const message = "zebra magazine";
            const shift = -26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
        it("should return false if the shift value is greater than 25", () => {
            const message = "Zebra Magazine";
            const shift = 26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
        it("should return false if the shift value is not present", () => {
            const message = "zebra magazine";
            const shift = null;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
        
        it("Ignores capital letters.", () => {
            const message = "A Message";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "d phvvdjh";

            expect(actual).to.equal(expected);
        });
    });
    describe("encoding a message", () => {
        it("When encoding, it handles shifts that go past the end of the alphabet.", () => {
            const message = "zebra magazine";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "cheud pdjdclqh";
            
            expect(actual).to.equal(expected);

        });
        it("It maintains space and other non-alphabetic symbols in the message, before and after encoding or decoding.", () => {
            const message = "a message.";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "d phvvdjh.";

            expect(actual).to.equal(expected);
        });
        it("will encode even if the shift is negative", () => {
            const message = "zebra message";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "wbyox jxdxwfkb";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("decodes a message", () => {
            const message = "phvvdjh";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        })
    });
});

