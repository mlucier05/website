//Bean Counting

function countBs(str) {
  let count = 0;
  for (pos = 0; pos < str.length; pos++) {
    if (str[pos] === "B") {
      count++;
    }
  }
  return count;
}

function countChar(str, char) {
  let count = 0;
  for (pos = 0; pos < str.length; pos++) {
    if (str[pos] === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
