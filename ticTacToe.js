var Board = function(side_length) {
  this.boardState = []; // Create storage for the boardState
  for (var row = 0; row < side_length; row++) {
    this.boardState.push(new Array(side_length)); // Create row & empty columns
  }
};

Board.prototype.square_is = function(row, col, X_or_O) {
  this.boardState[row][col] = X_or_O;
};

Board.prototype.winner = function() {
  var winCheck = function(row, piece) {
    var col = null;
    var counter = 0;

    for (var i = 0; i < row.length; i++) {
      if(counter >=3) { // Winner if 3 consecutive
        return piece;
      }
      col = row[i];
      if(piece === col){ // If col & piece are the same
        counter += 1; // Increase the count
      } else {
        if(counter > 0){ // If there is a break in the chain
          counter = 0; // Reset the count
        }
        continue;
      }
    }
  };
  this.boardState.forEach(function(row, rowIndex) { // Check rows
    // check X
    winCheck(row, 'X');
    // check O
    winCheck(row, 'O');
  });

  // returns either 'X', 'O', or null
};



function game1() {
  var board = new Board(3);

  board.square_is(1, 1, 'X');
  board.square_is(1, 0, 'O');
  board.square_is(0, 1, 'X');
  board.square_is(2, 1, 'O');
  board.square_is(0, 2, 'X');
  board.square_is(2, 0, 'O');

  // check for a winner - won't find one.
  if (board.winner()) {
    alert('Winner!! -> ' + board.winner());
    return;
  }

  board.square_is(0, 0, 'X');

  // check for a winner - X has won.
  if (board.winner()) {
    alert('Winner!! -> ' + board.winner());
    return;
  }
}
