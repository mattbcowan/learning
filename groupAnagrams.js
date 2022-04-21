var groupAnagrams = function (strs) {
  let ans = {};

  for (let word of strs) {
    let tmp = word.split("").sort().join("");

    if (ans[tmp]) {
      ans[tmp].push(word);
    } else {
      ans[tmp] = [word];
    }
  }

  return Object.values(ans);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams([""]);
groupAnagrams(["a"]);
