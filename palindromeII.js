const checkPalindrome = (s, i, j) => {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};

var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return checkPalindrome(s, i, j - 1) || checkPalindrome(s, i + 1, j);
    }
    i += 1;
    j -= 1;
  }

  return true;
};

validPalindrome("aba");
validPalindrome("abca");
validPalindrome("abc");
