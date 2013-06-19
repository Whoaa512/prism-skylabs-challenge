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
