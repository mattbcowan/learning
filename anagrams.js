function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let letter of str1) {
    lookup[letter] ? ++lookup[letter] : (lookup[letter] = 1);
  }

  for (let letter of str2) {
    if (!lookup[letter]) {
      return false;
    }
    --lookup[letter];
  }
  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
