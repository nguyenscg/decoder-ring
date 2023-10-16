// For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should test that the following is true:
const expect = require("chai").expect;

describe("ceasarShift", () => {
    describe("errors", () => {
        it("should return false if the shift value is equal to 0", () => {
            const message = "Zebra Magazine";
            const shift = 0;
            const actual = caesarShift(message, shift);
            expect(actual).to.be.false;
        });
        it("should return false if the shift value is less than -25", () => {
            const message = "zebra magazine";
            const shift = -26;
            const actual = caesarShift(message, shift);

            expect(actual).to.be.false;
        });
        it("should return false if the shift value is greater than 25", () => {
            const message = "Zebra Magazine";
            const shift = 26;
            const actual = caesarShift(message, shift);

            expect(actual).to.be.false;
        });
        it("should return false if the shift value is not present", () => {
            const message = "zebra magazine";
            const shift = null;
            expect(actual).to.be.false;
        });
    });
    it("Ignores capital letters.", () => {
        const message = "Zebra Magazine";
        const actual = message.toLowerCase();

        expect(message).to.equal(actual);

    });
    it("When encoding, it handles shifts that go past the end of the alphabet.", () => {

    });
    it("It mains space and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {

    });
});

