const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar", () => {
  it("should return false when the shift value equals 0", () => {
    const input = "thinkful";
    const actual = caesar(input, 0);
    expect(actual).to.be.false;
  });

  it("should return false when the shift value is less than -25", () => {
    const input = "thinkful";
    const actual = caesar(input, -33);
    expect(actual).to.be.false;
  });

  it("should return false when the shift value is greater than 25", () => {
    const input = "thinkful";
    const actual = caesar(input, 33);
    expect(actual).to.be.false;
  });


  it("should return false when the shift value doesn't exist", () => {
    const input = "thinkful";
    const actual = caesar(input);
    expect(actual).to.be.false;
  });

  it("should ignore capital letters", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });

  it("handles shift that goes beyond the alphabet", () => {
    const actual = caesar("xyZzZ! !", 3);
    const expected = "abccc! !";
    expect(actual).to.eql(expected);
  });

  it("spaces are maintained and other nonalphabetic symbols in the message, before and after encoding", () => {
    const actual = caesar("Zebra Magazine", 3);
    const expected = "cheud pdjdclqh";
    expect(actual).to.eql(expected);
  });


    it("maintains spaces and other nonalphabetic symbols in the message before and after decoding", () => {
        const actual = caesar("vhfuhw   p3vvdjhv  4uh ixq !!!", 3, false);
        const expected = "secret   m3ssages  4re fun !!!";
        expect(actual).to.equal(expected);
    });
  });
  
