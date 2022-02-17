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
