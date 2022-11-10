export const wordShortner = (word, max_length) => {
  if (word) {
    if (word.length > max_length) {
      const newWord = word.slice(0, max_length).concat("...");
      return newWord;
    } else return word;
  }
};


export const AscComparatorFunc = (a, b) => {
  if (a.id < b.id)
     return -1;
  if (a.id > b.id)
    return 1;
  return 0;
}