class Connect4 {
    // Class Connect4 with a constructor taking one inparemeter "selector".
    constructor(selector) {
    // Uses rows & cols later for making the board
    this.ROWS = 6;
    this.COLS = 7;
    // Making selector global inside the class.
    this.selector = selector;
    // Calls the method createGrid everytime we make a new class of Connect4.
    this.createGrid();
  }

  // Method createGrid()
  createGrid() {
    // Making a jquery-object of the inparemeter Selector. In this case the div with the ID of #connect4.
    let $board = this.selector;
    // Loop all rows to make 6 divs with the class row
    for (let row = 0; row < this.ROWS; row++) {
      const $row = $('<div>').addClass('row m-0');
      // Loop all cols to make 7 cols inside every row to create the gridsystem.
      for (let col = 0; col < this.COLS; col++) {
        const $col = $('<div>').addClass('col empty');
        $row.append($col);
      }
      // Append both rows and cols to the board.
      $board.append($row);
    }
  }
}
