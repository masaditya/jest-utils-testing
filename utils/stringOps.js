module.exports = {
    toUpper(string = "") {
        return string.toUpperCase()
    },
    toLower(string = "") {
        return string.toLowerCase()
    },
    splitBySpace(string = "") {
        return string.split(" ")
    },
    getCharIndex(string = "", index) {
        return string.charAt(index)
    },
    replaceWord(string = "", word, replacer) {
        return string.replace(word, replacer)
    }
}