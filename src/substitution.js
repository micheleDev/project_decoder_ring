function substitution(input, alphabet, encode = true) {
  if (!input || !alphabet || alphabet.length !== 26) return false;

  const duplicate = [];
  for (let characters in alphabet) {
      if (duplicate.indexOf(alphabet[characters]) < 0) {
          duplicate.push(alphabet[characters]);
      } else {
          return false;
      }
  }

   const origAlphabet = 'abcdefghijklmnopqrstuvwxyz';
   const lowercase = input.toLowerCase();
   let output = '';


  for (let i= 0; i< lowercase.length; i++) {
      if (lowercase[i] === ' ') {
          output += ' ';
      } else { 
          let origAlphabetIndex = origAlphabet;
          let code = alphabet;
          if (!encode) {
              origAlphabetIndex = alphabet;
              code = origAlphabet;
            };
          for (let j = 0; j < origAlphabetIndex.length; j++) {
              if (lowercase[i] === origAlphabetIndex[j]) { 
                  output += code[j];
              }
          }
      }    
  }
  return output;
}
module.exports = substitution;