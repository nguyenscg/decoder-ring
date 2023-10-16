// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polyEncoder = {'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51',
                         'f':'12', 'g':'22', 'h':'32', 'i':'42', 'j':'42', 'k':'52',
                         'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53',
                        'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54',
                        'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55', ' ':' ',}
    const polyDecoder = {'11':'a', '21':'b', '31':'c', '41':'d', '51':'e',
                        '12':'f', '22':'g', '32':'h', '42':'(i/j)', '52':'k',
                        '13':'l', '23':'m', '33':'n', '43':'o', '53':'p',
                        '14':'q', '24':'r', '34':'s', '44':'t', '54':'u',
                        '15':'v', '25':'w', '35':'x', '45':'y', '55':'z', ' ':' ',}
    // if no input, return false
    if (!input) {
      return false;
    }
    let noSpace = input.split(" ").join('');
    if ((!encode) && (noSpace.length % 2 === 1)) return false;
    let result = []; // initalize empty array
    let lower = input.toLowerCase(); // set input to lowercase
    //check if it needs encoded or decoded and then push the correct numbers or letters to
    if (encode) {
      for (let i = 0; i < lower.length; i++) {
        result.push(polyEncoder[lower[i]]);
      }
    }
    else if (encode === false) {
      for (let i = 0; i < lower.length - 1; i+=2) {
        if (lower[i] === " ") {
          result.push(" ");
          i++;
        }
        result.push(polyDecoder[lower[i] + lower[i + 1]]);
      }
    }
    result = result.join('');
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
