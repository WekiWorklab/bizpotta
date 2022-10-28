export const wordShortner = (word, max_length) =>{
    if (word.length >= max_length) {
        const newWord = word.slice(0, max_length).concat("...")
        return newWord
    }
    else {
        return word
    }
}