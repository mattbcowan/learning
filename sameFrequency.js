function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;

  let frequency = {};

  for (let nums of num1.toString()) {
    frequency[nums] = frequency[nums] + 1 || 1;
  }

  for (let nums of num2.toString()) {
    if (!frequency[nums]) {
      return false;
    }
    frequency[nums] = frequency[nums] - 1;
  }

  // Check if hashmap has remaining values

  return true;
}

sameFrequency(182, 281); // True
sameFrequency(34, 14); // False
sameFrequency(3589578, 5879385); // True
sameFrequency(22, 222); // False
