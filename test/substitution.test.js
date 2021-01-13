const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return false if input or alphabet is missing", () => {
        const actual = substitution("", "");
        expect(actual).to.be.false;
    });
    
    it("should return false if given alphabet isn't 26 letters long", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });

    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });

    it("should only return spaces and letters", () => {
        const expected = "jrufscpw";
        const actual = substitution("t!h@i%nkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });

    it("correctly encodes given phrase", () => {
        const expected = "jrufscpw"
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });

    it("correctly decodes given phrase", () => {
        const expected = "thinkful"
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
    });

    it("should maintain spaces throughout and capital letters are ignored", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 
        expect(actual).to.eql(expected);
    });

    it("should treat special characters as letters", () => {
        const expected = "bcda";
        const actual = substitution("abc!", "!abcdefghijklmnopqrstuvwxy", false);
        expect(actual).to.eql(expected);
    })
})
