var isPalindrome = function (s) {
  const re = /[^a-z0-9]/g;
  s = s.toLowerCase();
  s = s.replace(re, "");
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");
isPalindrome("0P");
