function isEven(x) {
  if (x < 0) {
    x = x * -1;
    return isEven(x);
  }
  if (x == 0) {
    return true;
  }
  if (x == 1) {
    return false;
  }
  x = x - 2;
  return isEven(x);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
