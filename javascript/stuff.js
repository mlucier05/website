let triangle = "#";

//Triangle
for (let counter = 0; counter < 7; counter++) {
  console.log(triangle);
  triangle = triangle + "#";
}

//FizzBuzz
for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Chessboard
let size = 6;
let chessboard = "";

for (let height = 0; height < size; height++) {
  for (let length = 0; length < size / 2; length++) {
    if (height % 2 == 1) {
      chessboard += "#";
    } else {
      chessboard += " ";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
