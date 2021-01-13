function caesar(input, shift = 0, encode = true) {
  if (shift < -25 || shift > 25 || shift === 0) return false;
  if (encode === false) {
    if (Math.sign(shift) === 1) {
      shift = -Math.abs(shift);
    } else if (Math.sign(shift) === -1) {
      shift = Math.abs(shift);
    }
  }
  //convert to lower case = ignore
  let result = "";
  let lowCaseInput = input.toLowerCase();

  for (let i = 0; i < lowCaseInput.length; i++) {
    let char = lowCaseInput.charCodeAt(i);
    // ASCII values for lowercase a-z (97)-(122), outside hcaracter ignore & log
    if (Math.sign(shift) === 1) {
      if (char >= 97 && char <= 122) {
        result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
      } else result += lowCaseInput[i];
      continue;
      // this function should initiate the decoding
    } else if (Math.sign(shift) === -1) {
      if (char >= 97 && char <= 122) {
        result += String.fromCharCode(((char - 122 + shift) % 26) + 122);
      } else result += lowCaseInput[i];
    }
  }
  return result;
}

module.exports = caesar;
