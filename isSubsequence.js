function isSubsequence(n, m) {
  if (n.length > m.length) {
    console.log(false);
    return false;
  }

  let p1 = 0;

  for (let p2 = 0; p2 < m.length; p2++) {
    if (p1 === n.length - 1) {
      console.log(true);
      return true;
    }
    console.log(n[p1], n[p2]);
    if (n[p1] === m[p2]) {
      p1++;
    }
  }
  console.log(false);
  return false;
}

isSubsequence("hello", "hello world");
isSubsequence("sing", "sting");
isSubsequence("abc", "abracadabra");
isSubsequence("abc", "acb");
