const alphabet = {
  a: 11,
  b: 21,
  c: 31,
  d: 41,
  e: 51,

  f: 12,
  g: 22,
  h: 32,
  "(i/j)": 42,
  i: 42,
  j: 42,
  k: 52,

  l: 13,
  m: 23,
  n: 33,
  o: 43,
  p: 53,

  q: 14,
  r: 24,
  s: 34,
  t: 44,
  u: 54,

  v: 15,
  w: 25,
  x: 35,
  y: 45,
  z: 55,
};

function polybius(input, encode = true) {
  if (!input) return false;

  if (encode) {
    const lowCase = input.toLowerCase().split(" ");
    const wordsToKeys = lowCase.map((word) =>
      word.split("").map((letter) => alphabet[letter])
    );
    const turnToKeys = wordsToKeys.map((keys) => keys.join(""));
    return turnToKeys.join(" ");
  }
  if (!encode) {
    if (input.split(" ").join("").length % 2 !== 0) return false;
    const words = input.split(" ");
    let separatedWords = words.map((word) => word.match(/.{2}/g));
    const decodeLetters = separatedWords.map((numberKey) =>
      numberKey.map((letter) =>
        Object.keys(alphabet).find((key) => alphabet[key] == letter)
      )
    );
    const deleteSpaces = decodeLetters.map((space) => space.join(""));
    return deleteSpaces.join(" ");
  }
}

module.exports = polybius;
