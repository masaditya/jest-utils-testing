const stringOps = require("../utils/stringOps");

describe("String Operation", () => {
    test("it should convert to uppercase", () => {
        const sentences = "hello world";
        const output = "HELLO WORLD";
        expect(stringOps.toUpper(sentences)).toEqual(output);
    });

    test("it should convert to lowercase", () => {
        const sentences = "HELLO WORLD";
        const output = "hello world";
        expect(stringOps.toLower(sentences)).toEqual(output);
    });

    test("it should return array of words", () => {
        const sentences = "hello world";
        const output = ["hello", "world"];
        expect(stringOps.splitBySpace(sentences)).toEqual(output);
    });

    test("it should char of index", () => {
        const sentences = "hello world";
        const output = "o";
        expect(stringOps.getCharIndex(sentences, 4)).toEqual(output);
    });

    test("it should return replaced string", () => {
        const sentences = "hello world";
        const output = "hello there";
        expect(stringOps.replaceWord(sentences, "world", "there")).toEqual(output);
    });

});