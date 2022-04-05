function validAnagram(str1, str2) {
  let str1Vals = {};
  let str2Vals = {};

  for (let letter of str1) {
    str1Vals[letter] = ++str1Vals[letter] || 1;
  }

  for (let letter of str2) {
    str2Vals[letter] = ++str2Vals[letter] || 1;
  }

  for (let key in str1Vals) {
    if (!(key in str2Vals)) {
      return false;
    }
    if (str1Vals[key] !== str2Vals[key]) {
      return false;
    }
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
