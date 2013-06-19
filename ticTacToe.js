var Board = function(side_length) {
  var board = [];
  for (var row = 0; row < side_length; row++) {
    var tempRow = new Array(side_length); // Create row
    for (var i = 0; i < tempRow.length; i++) {
      tempRow.push(null); // Create empty columns
    }
    board.push(tempRow);
  }

  return board; // return NxN board of null values
};

Board.prototype.square_is = function(row, col, X_or_O) {
  // do stuff...
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
