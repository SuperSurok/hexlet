import _ from 'lodash';

////////////////////////////////////////////
//////////// First Solution ////////////////
////////////////////////////////////////////
const countWords = (sentence: string[]) => {
  const wordList = _.words(sentence);
  const result = {};

  if (wordList.length === 0) return {};

  for (const name of wordList) {
    const lowName = name.toLowerCase();
    // todo Add norm types
    // @ts-ignore
    result[lowName] = (result[lowName] ?? 0) + 1;
  }
  return result;
};

////////////////////////////////////////////
//////////// Master Solution ///////////////
////////////////////////////////////////////
const countWordsMaster = (sentence: string[]) => {
  const words = _.words(sentence);
  const result = {};
  for (const word of words) {
    const lowerWord = word.toLowerCase();
    // todo Add norm types
    // @ts-ignore
    result[lowerWord] = (result[lowerWord] ?? 0) + 1;
  }

  return result;
};
