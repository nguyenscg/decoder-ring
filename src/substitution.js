// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

   function substitution(input, alphabet, encode = true) {
    // alphabet refers to substitution alphabet
    const actualAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // if substitution alphabet is missing or not exactly 26 characters or does not include special characters
        const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';

if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }
    let result = "";
    let lower = input.toLowerCase();
    if (encode) {
      for (let i = 0; i < lower.length; i++) {
        // first handle the empty string character
        if (lower[i] === ' ') {
          result += ' ';
        // encode the message;
        } else {
          const index = actualAlphabet.indexOf(lower[i]);
          result += alphabet[index];
        }
      }
    }
    else {
      // Decoding
      for (let i = 0; i < lower.length; i++) {
        // first handle the empty string character
        if (lower[i] === ' ') {
          result += ' ';
        } else {
          // Invert the substitution to decode
          for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === lower[i]) {
              result += standardAlphabet[j];
              break;
            }
          }
        }
      }
    }

    return result;
  }
 

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
