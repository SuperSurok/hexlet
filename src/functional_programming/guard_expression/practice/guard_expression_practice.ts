/// /////////////////////////////////////
///  First Solution /////////////////////
/// /////////////////////////////////////
const isPalindromeFirst = (word: string): boolean => {
  const arraySymbols = word.toLowerCase().split(' ');
  const updateString = arraySymbols.join('');

  if (updateString.length < 2) {
    return true;
  }

  const firstSymbol = updateString[0];
  const lastSymbol = updateString[updateString.length - 1];
  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const updateSymbolsArray = updateString.substring(1, updateString.length - 1);

  return isPalindromeFirst(updateSymbolsArray);
};
/// /////////////////////////////////////
///  Second Solution ////////////////////
/// /////////////////////////////////////
const isPalindromeSecond = (word: string): boolean => {
  const lowString = word.toLowerCase();

  if (lowString.length <= 1) {
    return true;
  }

  if (lowString[0] !== lowString[lowString.length - 1]) {
    return false;
  }
  const newString = lowString.substring(1, lowString.length - 1);
  return isPalindromeSecond(newString);
};

/// /////////////////////////////////////
///  Third Solution /////////////////////
/// /////////////////////////////////////
const isPalindromeThird = (word: string): boolean => {
  const lowString = word.toLowerCase();
  if (lowString.length <= 1) return true;
  if (lowString[0] !== lowString[lowString.length - 1]) return false;
  const newLowString = lowString.substring(1, lowString.length - 1);
  return isPalindromeThird(newLowString);
};

/// /////////////////////////////////////
///  Fourth Solution ////////////////////
/// /////////////////////////////////////
const isPalindromeFourth = (str: string): boolean | undefined => {
  if (str.length < 2) return true;
  let counter = 0;
  for (let i = 0; i < str.length; i += 1) {
    for (let k = str.length - 1; k > 0; k -= 1) {
      if (str[i] === str[k]) {
        return isPalindromeFourth(str.substring((counter += 1), str.length - 1));
      }
    }
    return false;
  }
};

/// /////////////////////////////////////
///  Fifth Solution /////////////////////
/// /////////////////////////////////////
const isPalindromeFifth = (word: string): boolean => {
  if (word.length < 2) return true;
  if (word.substring(0, 1) === word.substring(word.length - 1)) {
    return isPalindromeFifth(word.substring(1, word.length - 1));
  }
  return false;
};

/// /////////////////////////////////////
///  Master Solution ////////////////////
/// /////////////////////////////////////
const isPalindromeMaster = (string: string): boolean => {
  if (string.length <= 1) {
    return true;
  }

  const firstSymbol = string[0];
  const lastSymbol = string[string.length - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = string.substring(1, string.length - 1);

  return isPalindromeMaster(stringWithoutFirstAndLastSymbols);
};
