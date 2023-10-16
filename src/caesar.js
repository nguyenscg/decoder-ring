
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // abcdefghijklmnopqrstuvwxyz
    // input is the word/sentence that you are trying to decipher
    // shift is how many it shifts
    // function should return false
    // str.charCodeAt(index)
    // If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
    if (!shift || shift == 0 || shift >= alphabet.length || shift <= (alphabet.length)* -1) {
      return false;
    }
    
    if (encode === false) {
      shift = shift * (-1);
    }
    
    input = input.toLowerCase();
    let encodedMessage = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (!alphabet.includes(char)) {
        encodedMessage += char;
      }
      for (let i = 0; i < alphabet.length; i++) {
        if (char === alphabet[i]) {
          if (i + shift >= alphabet.length) {
            //handles the shift for letters at the end of the alphabet
            encodedMessage += alphabet[(i + shift) - alphabet.length];
          } else if (i + shift < 0) {
            // handles the shift for letters at the beginning of the alphabet
            encodedMessage += alphabet[26 + (i + shift)]
          } else {
            encodedMessage += alphabet[i + shift]
          }
        }
      }
    }
    return encodedMessage;
    // loop through input to encode message
    // capital letters are 65 to 90; so we should ignore this
    // lowercase letters are 97 to 122; 26 letters
    // fromCharCode takes ASCII number and gives you the letter
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
