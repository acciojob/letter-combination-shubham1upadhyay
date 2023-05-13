const digitToLettersMap = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};

function letterCombinations(input_digit) {
const result = [];
  
  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(combination);
    } else {
      const letters = digitToLettersMap[nextDigits[0]];
      for (let i = 0; i < letters.length; i++) {
        backtrack(combination + letters[i], nextDigits.slice(1));
      }
    }
  }
  
  if (input_digit) {
    backtrack('', input_digit);
  }
  
  return result;
	
}

module.exports = letterCombinations;
