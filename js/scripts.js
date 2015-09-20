// Board prototype constructor :

function Board(squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine, turn, turnNumber) {
  this.squareOne = squareOne;
  this.squareTwo = squareTwo;
  this.squareThree = squareThree;
  this.squareFour = squareFour;
  this.squareFive  = squareFive;
  this.squareSix = squareSix;
  this.squareSeven = squareSeven;
  this.squareEight = squareEight;
  this.squareNine = squareNine;
  this.turn = turn;
  this.turnNumber = turnNumber;
}


// Function that determines if there's a winner :

Board.prototype.winner = function() {
  if ((this.squareOne == this.squareTwo & this.squareTwo == this.squareThree &
    this.squareOne != " ") ||
    (this.squareFour == this.squareFive & this.squareFive == this.squareSix &
      this.squareFour != " ") ||
    (this.squareSeven == this.squareEight & this.squareEight == this.squareNine &
      this.squareSeven != " ") ||
    (this.squareOne == this.squareFour & this.squareFour == this.squareSeven &
      this.squareOne != " ") ||
    (this.squareTwo == this.squareFive & this.squareFive == this.squareEight &
      this.squareTwo != " ") ||
    (this.squareThree == this.squareSix & this.squareSix == this.squareNine &
      this.squareThree != " ") ||
    (this.squareThree == this.squareFive & this.squareFive == this.squareSeven &
      this.squareThree != " ") ||
    (this.squareOne == this.squareFive & this.squareFive == this.squareNine &
      this.squareOne != " ")) {
    return "winner";
  } else if (this.squareOne != " " & this.squareTwo != " "
    & this.squareThree != " " & this.squareFour != " "
    & this.squareFive != " " & this.squareSix != " "
    & this.squareSeven != " " & this.squareEight != " "
    & this.squareNine != " ") {
    return "cat's game";
  } else {
    return "no winner";
  }
}


// Function that places an X on the board :

Board.prototype.placeX = function(clickedSquareNumber) {
  if (clickedSquareNumber == 1) {
    if (this.squareOne == " ") {
      this.squareOne = "X";
    }
  } else if (clickedSquareNumber == 2) {
    if (this.squareTwo == " ") {
      this.squareTwo = "X";
    }
  } else if (clickedSquareNumber == 3) {
    if (this.squareThree == " ") {
      this.squareThree = "X";
    }
  } else if (clickedSquareNumber == 4) {
    if (this.squareFour == " ") {
      this.squareFour = "X";
    }
  } else if (clickedSquareNumber == 5) {
    if (this.squareFive == " ") {
      this.squareFive = "X";
    }
  } else if (clickedSquareNumber == 6) {
    if (this.squareSix == " ") {
      this.squareSix = "X";
    }
  } else if (clickedSquareNumber == 7) {
    if (this.squareSeven == " ") {
      this.squareSeven = "X";
    }
  } else if (clickedSquareNumber == 8) {
    if (this.squareEight == " ") {
      this.squareEight = "X";
    }
  } else if (clickedSquareNumber == 9) {
    if (this.squareNine == " ") {
      this.squareNine = "X";
    }
  }
}


// Function that places an O on the board :

Board.prototype.placeO = function(clickedSquareNumber) {
  if (clickedSquareNumber == 1) {
    if (this.squareOne == " ") {
      this.squareOne = "O";
    }
  } else if (clickedSquareNumber == 2) {
    if (this.squareTwo == " ") {
      this.squareTwo = "O";
    }
  } else if (clickedSquareNumber == 3) {
    if (this.squareThree == " ") {
      this.squareThree = "O";
    }
  } else if (clickedSquareNumber == 4) {
    if (this.squareFour == " ") {
      this.squareFour = "O";
    }
  } else if (clickedSquareNumber == 5) {
    if (this.squareFive == " ") {
      this.squareFive = "O";
    }
  } else if (clickedSquareNumber == 6) {
    if (this.squareSix == " ") {
      this.squareSix = "O";
    }
  } else if (clickedSquareNumber == 7) {
    if (this.squareSeven == " ") {
      this.squareSeven = "O";
    }
  } else if (clickedSquareNumber == 8) {
    if (this.squareEight == " ") {
      this.squareEight = "O";
    }
  } else if (clickedSquareNumber == 9) {
    if (this.squareNine == " ") {
      this.squareNine = "O";
    }
  }
}


// Function that disables clicking of squares :

Board.prototype.clearAll = function() {
  $(".square-one").off();
  $(".square-two").off();
  $(".square-three").off();
  $(".square-four").off();
  $(".square-five").off();
  $(".square-six").off();
  $(".square-seven").off();
  $(".square-eight").off();
  $(".square-nine").off();
}


// PlayerX prototype constructor :

function PlayerX(playerName, playerColor) {
  this.playerName = playerName;
  this.playerColor = playerColor;
}




// PlayerO prototype constructor :

function PlayerO(playerName, playerColor) {
  this.playerName = playerName;
  this.playerColor = playerColor;
}


// Initialize variables :

var board = new Board(" ", " ", " ", " ", " ", " ", " ", " ", " ", "X", 1);
var playerX = new PlayerX(" ", " ");
var playerO = new PlayerO(" ", " ");


// Start button animations :

$(function() {
  setTimeout(function () {
    $("button").addClass('animated pulse');
  }, 4000);
});
$(function() {
  setTimeout(function () {
    $("button").addClass('animated rubberBand');
  }, 8000);
});
$(function() {
  setTimeout(function () {
    $("button").addClass('animated swing');
  }, 12000);
});
$(function() {
  setTimeout(function () {
    $("button").addClass('animated flip');
  }, 16000);
});
$(function() {
  setTimeout(function () {
    $("button").addClass('animated wobble');
  }, 20000);
});


// Sound effect :

var clickSound = new Audio("sounds/beep.mp3");



// Piece removing function :

var removePiece = (function() {
  if (board.turnNumber == 1) {
    board.turnNumber = 2;
    $(".exes").empty().val();
    $(".exes").append("<p>X</p><p>X</p><p>X</p><p>X</p>");
  } else if (board.turnNumber == 2) {
    board.turnNumber = 3;
    $(".ohs").empty().val();
    $(".ohs").append("<p>O</p><p>O</p><p>O</p>");
  } else if (board.turnNumber == 3) {
    board.turnNumber = 4;
    $(".exes").empty().val();
    $(".exes").append("<p>X</p><p>X</p><p>X</p>");
  } else if (board.turnNumber == 4) {
    board.turnNumber = 5;
    $(".ohs").empty().val();
    $(".ohs").append("<p>O</p><p>O</p>");
  } else if (board.turnNumber == 5) {
    board.turnNumber = 6;
    $(".exes").empty().val();
    $(".exes").append("<p>X</p><p>X</p>");
  } else if (board.turnNumber == 6) {
    board.turnNumber = 7;
    $(".ohs").empty().val();
    $(".ohs").append("<p>O</p>");
  } else if (board.turnNumber == 7) {
    board.turnNumber = 8;
    $(".exes").empty().val();
    $(".exes").append("<p>X</p>");
  } else if (board.turnNumber == 8) {
    board.turnNumber = 9;
    $(".ohs").empty().val();
  } else if (board.turnNumber == 9) {
    board.turnNumber = 10;
    $(".exes").empty().val();
  }
});


// Check if cat's game function :

var isDraw = (function() {
  if (board.winner() == "cat's game") {
    $(".turn-title").fadeToggle();
    $(".winner").toggle();
    $(".winner").addClass('animated rollIn');
    $(".winner-here").append("CAT GAME<br>it is a draw");
    board.clearAll();
  }
});


// jQuery functions :

$(document).ready(function() {
  $(".first-page").addClass('animated bounceInDown');


// Start game button :

  $("form#player-data").submit(function() {
    event.preventDefault();

    playerX.playerName = $("input#playerX-name").val().toUpperCase();
    playerO.playerName = $("input#playerO-name").val().toUpperCase();

    $(".playerX-name").empty().val();
    $(".playerX-name").append(playerX.playerName);
    $(".playerO-name").empty().val();
    $(".playerO-name").append(playerO.playerName);
    $(".turn").empty().val();
    $(".turn").append(playerX.playerName);

    $(".first-page").addClass('animated bounceOutDown');

    setTimeout(function () {
      $(".first-page").toggle();
      $(".second-page").addClass('animated bounceInDown');
      $(".second-page").toggle();
    }, 900);
  });


// New game button :

$("form#restart").submit(function() {
  event.preventDefault();
  $(".second-page").addClass('animated bounceOutDown');
  setTimeout(function () {
    location.reload();
  }, 900);
});


// Clicking on grid functions :
// Square one :

  $(".square-one").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-1").empty().val();
      $(".sq-1").append("X");
      $(".sq-1").addClass("animated bounceInLeft")
      board.squareOne = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-1").empty().val();
      $(".sq-1").append("O");
      $(".sq-1").addClass("animated bounceInRight")
      board.squareOne = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Square two :

  $(".square-two").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-2").empty().val();
      $(".sq-2").append("X");
      $(".sq-2").addClass("animated bounceInLeft")
      board.squareTwo = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-2").empty().val();
      $(".sq-2").append("O");
      $(".sq-2").addClass("animated bounceInRight")
      board.squareTwo = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Square three :

  $(".square-three").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-3").empty().val();
      $(".sq-3").append("X");
      $(".sq-3").addClass("animated bounceInLeft")
      board.squareThree = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-3").empty().val();
      $(".sq-3").append("O");
      $(".sq-3").addClass("animated bounceInRight")
      board.squareThree = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Square four :

  $(".square-four").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-4").empty().val();
      $(".sq-4").append("X");
      $(".sq-4").addClass("animated bounceInLeft")
      board.squareFour = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-4").empty().val();
      $(".sq-4").append("O");
      $(".sq-4").addClass("animated bounceInRight")
      board.squareFour = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Square five :

  $(".square-five").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-5").empty().val();
      $(".sq-5").append("X");
      $(".sq-5").addClass("animated bounceInLeft")
      board.squareFive = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-5").empty().val();
      $(".sq-5").append("O");
      $(".sq-5").addClass("animated bounceInRight")
      board.squareFive = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Square six :

  $(".square-six").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-6").empty().val();
      $(".sq-6").append("X");
      $(".sq-6").addClass("animated bounceInLeft")
      board.squareSix = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-6").empty().val();
      $(".sq-6").append("O");
      $(".sq-6").addClass("animated bounceInRight")
      board.squareSix = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Square seven :

  $(".square-seven").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-7").empty().val();
      $(".sq-7").append("X");
      $(".sq-7").addClass("animated bounceInLeft")
      board.squareSeven = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-7").empty().val();
      $(".sq-7").append("O");
      $(".sq-7").addClass("animated bounceInRight")
      board.squareSeven = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Square eight :

  $(".square-eight").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-8").empty().val();
      $(".sq-8").append("X");
      $(".sq-8").addClass("animated bounceInLeft")
      board.squareEight = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-8").empty().val();
      $(".sq-8").append("O");
      $(".sq-8").addClass("animated bounceInRight")
      board.squareEight = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Square nine :

  $(".square-nine").click(function() {
    clickSound.play();
    if (board.turn == "X") {
      board.turn = "O";
      $(".sq-9").empty().val();
      $(".sq-9").append("X");
      $(".sq-9").addClass('animated bounceInLeft')
      board.squareNine = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerX.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerX.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerX.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerX.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerX.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    } else {
      board.turn = "X";
      $(".sq-9").empty().val();
      $(".sq-9").append("O");
      $(".sq-9").addClass('animated bounceInRight')
      board.squareNine = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").fadeToggle();
        $(".winner").toggle();
        $(".winner").addClass('animated rollIn');
        $(".winner-here").append(playerO.playerName + " IS THE WINNER");
        board.clearAll();
      }
      if (playerO.playerColor == "red") {
        $(this).css("color", "red");
      } else if (playerO.playerColor == "blue") {
        $(this).css("color", "blue");
      } else if (playerO.playerColor == "green") {
        $(this).css("color", "green");
      } else if (playerO.playerColor == "purple") {
        $(this).css("color", "purple");
      }
    }
    isDraw();
    $(this).off();
    $(this).removeClass('clickable');
    removePiece();
  });


// Clicking a color choice :

  $(".red-button-x").click(function() {
    clickSound.play();
    playerX.playerColor = "red";
    $(".player-x").css("color", "red");
  });

  $(".red-button-o").click(function() {
    clickSound.play();
    playerO.playerColor = "red";
    $(".player-o").css("color", "red");
  });

  $(".blue-button-x").click(function() {
    clickSound.play();
    playerX.playerColor = "blue";
    $(".player-x").css("color", "blue");
  });

  $(".blue-button-o").click(function() {
    clickSound.play();
    playerO.playerColor = "blue";
    $(".player-o").css("color", "blue");
  });

  $(".green-button-x").click(function() {
    clickSound.play();
    playerX.playerColor = "green";
    $(".player-x").css("color", "green");
  });

  $(".green-button-o").click(function() {
    clickSound.play();
    playerO.playerColor = "green";
    $(".player-o").css("color", "green");
  });

  $(".purple-button-x").click(function() {
    clickSound.play();
    playerX.playerColor = "purple";
    $(".player-x").css("color", "purple");
  });

  $(".purple-button-o").click(function() {
    clickSound.play();
    playerO.playerColor = "purple";
    $(".player-o").css("color", "purple");
  });

});
