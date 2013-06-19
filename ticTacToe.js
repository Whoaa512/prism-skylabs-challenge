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
  // Current implementation returns who the last person to have 3 consecutive
  // pieces is as the winner
  // TODO: Fix the above bug
  var currentWinner = null;
  var rowCheck = function(row, piece) { // Helper func to check for consecutive pieces
    var col = null;
    var counter = 0;

    for (var i = 0; i < row.length; i++) {
      if(counter >=3) { // Winner if 3 consecutive
        currentWinner = piece;
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

  // Check rows
  this.boardState.forEach(function(row, rowIndex, board) {
    // check X
    rowCheck(row, 'X');
    // check O
    rowCheck(row, 'O');
  });

  // Check cols
  var cols = {};
  this.boardState.forEach(function(row, rowIndex, board) {
  // Creates a cols object containing arrays of each column
    cols[rowIndex] = cols[rowIndex] || new Array(board.length);
    row.forEach(function(col, colIndex,row) {
      cols[colIndex] = cols[colIndex] || [];
      cols[colIndex].push(col);
    });
  });
  for (var key in cols) {
    if (cols.hasOwnProperty(key)) {
      rowCheck(row, 'X');
      rowCheck(row, 'O');
    }
  }

  return currentWinner;
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
