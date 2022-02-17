//Minimum

function min(x1, x2) {
  if (x1 > x2) {
    return (x2);
  }
  if (x2 > x1) {
    return (x1);
  }
}

console.log(min(0, 10));
console.log(min(0, -10));
