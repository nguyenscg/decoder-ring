// For the substitution cipher (example: substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"), the tests that you write should test that the following is true:
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    describe("error handling", () => {
        it("returns false if the given alphabet isn't exactly 26 characters long", () => {
            const message = "message";
            const alphabet = "short";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
        it("it returns false if there are any duplicate characters in the given alphabet", () => {
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzewwqq";
            const actual = substitution(message, alphabet);
            
            expect(actual).to.be.false;
        });
    });
    describe("encoding message", () => {
        it("maintains spaces in the message, before and after enoding or decoding", () => {
            const message = "a message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "p ykrrpik";

            expect(actual).to.equal(expected);
        });
        it("ignores capital letters", () => {
            const message = "Message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";

            expect(actual).to.equal(expected);
        });
        it("it correctly translate the given phrase, based on the alphabet given to the function", () => {
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";

            expect(actual).to.equal(expected);
        });
    });
})
