const reverseString = (word = "") => word.split("").reverse().join("");

const validatePalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverseString(lowerWord);
};

module.exports = {
  validatePalindrome,
  reverseString,
};
