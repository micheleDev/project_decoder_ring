const polybius = require('../src/polybius');
const expect = require('chai').expect;

describe('polybius', () => {

    it("should translate 42 to (i/j)", () => {
        const expected = 'th(i/j)nkful';
        const actual = polybius('4432423352125413', false); 
        expect(actual).to.equal(expected);
    });

    it("should translate i and j to 42", () => {
        expect(polybius('i')).to.eql('42');
        expect(polybius('j')).to.eql('42');
    });

    it("should ignore capital letters and maintain spaces", () => {
        expect(polybius('Hello world')).to.eql('3251131343 2543241341');
        expect(polybius('3251131343 2543241341', false)).to.include(' ');
    });

    it("should return a string when encoding the input", () =>{
        const expected = 'hello world'
        const actual = polybius('3251131343 2543241341', false);
        expect(actual).to.equal(expected);
    });

    it(("should return an encoded message"), () => {
        const expected = '4432423352125413';
        const actual = polybius('thinkful');
        expect(actual).to.eql(expected);
      });
    
      it(("should return a decoded message showing both i/j"), () => {
        const expected = 'th(i/j)nkful';
        const actual = polybius('4432423352125413', false);
        expect(actual).to.eql(expected);
      });
    
      it(("should return false when input is missing"), () => {
        const actual = polybius('', false);
        expect(actual).to.be.false;
      });
      
      it("should return false if number of characters in string is not even", () =>{
        const actual = polybius('44324233521254134', false);
        expect(actual).to.be.false;
    });
})