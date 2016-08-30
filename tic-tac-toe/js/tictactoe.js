var spaces = document.getElementsByClassName('space');
var turn = document.getElementsByTagName('p')[2];
var rightScore = document.getElementById('right');
var rightScoreSpan = document.getElementById('right').getElementsByTagName('span')[0];
var leftScore = document.getElementById('left');
var leftScoreSpan = document.getElementById('left').getElementsByTagName('span')[0];
var button = document.getElementsByTagName('button');
var clicks = 0;
var symbol;
var computerSymbol;
var arrX = [];
var arrO = [];
var winningMoves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var inRow = 0;
var xWins = 0;
var oWins = 0;
var gameboard = ['', '', '', '', '', '', '', '', ''];
var goComputer;

document.addEventListener('DOMContentLoaded', function() {
	document.getElementsByClassName('container')[0].addEventListener('click', emptySpace);
	getSymbol();
	button[2].addEventListener('click', function() {
		turn.innerHTML = "New game. It's X's turn to go.";
		clearBoard();
	});
	button[3].addEventListener('click', function() {
		resetScores();
	});
});

function getSymbol() {
	document.getElementById('x').addEventListener('click', function() {
		symbol = 'X';
		computerSymbol = 'O';
		leftScore.getElementsByTagName('p')[0].innerHTML = "Player X Wins:";
		rightScore.getElementsByTagName('p')[0].innerHTML = "Computer O Wins:";
		visibilePage();
	});
	document.getElementById('o').addEventListener('click', function() {
		symbol = 'O';
		computerSymbol = 'X';
		rightScore.getElementsByTagName('p')[0].innerHTML = "Player O Wins:";
		leftScore.getElementsByTagName('p')[0].innerHTML = "Computer X Wins:";
		visibilePage();
		neverLose();
	});
}

function visibilePage() {
	document.getElementById('symbol-container').style.display = 'none';
	document.getElementsByClassName('container')[0].style.visibility = 'visible';
	document.getElementsByClassName('container')[1].style.visibility = 'visible';
	rightScore.style.visibility = 'visible';
	leftScore.style.visibility = 'visible';
}

function computerMove(idx) {
	if (computerSymbol === 'X') {
		spaces[idx].classList.add('red');
		turn.innerHTML = "It's O's turn to go.";
		arrX.push(parseInt(spaces[idx].getAttribute('data-num')));
		clicks++;
		if (checkForWin(arrX) === true) {
			turn.innerHTML = "Computer X won! New game. It's X's turn to go.";
      xWins++;
      leftScoreSpan.innerHTML = xWins;
    	clearBoard();
		}
	} else {
		spaces[idx].classList.add('blue');
		turn.innerHTML = "It's X's turn to go.";
		arrO.push(parseInt(spaces[idx].getAttribute('data-num')));
		clicks++;
		if (checkForWin(arrO) === true) {
			turn.innerHTML = "Computer O won! New game. It's X's turn to go.";
      oWins++;
      rightScoreSpan.innerHTML = oWins;
    	clearBoard();
		}
	}
}

function neverLose() {
	if (gameboard[0] === '' && ((gameboard[1] === symbol && gameboard[2] === symbol) || (gameboard[3] === symbol && gameboard[6] === symbol) || (gameboard[4] === symbol && gameboard[8] === symbol))) {
		gameboard[0] = computerSymbol;
		spaces[0].innerHTML = computerSymbol;
		computerMove(0);
	} else if (gameboard[1] === '' && ((gameboard[0] === symbol && gameboard[2] === symbol) || (gameboard[4] === symbol && gameboard[7] === symbol))) {
		gameboard[1] = computerSymbol;
		spaces[1].innerHTML = computerSymbol;
		computerMove(1);
	} else if (gameboard[2] === '' && ((gameboard[0] === symbol && gameboard[1] === symbol) || (gameboard[5] === symbol && gameboard[8] === symbol) || (gameboard[4] === symbol && gameboard[6] === symbol))) {
		gameboard[2] = computerSymbol;
		spaces[2].innerHTML = computerSymbol;
		computerMove(2);
	} else if (gameboard[3] === '' && ((gameboard[4] === symbol && gameboard[5] === symbol) || (gameboard[0] === symbol && gameboard[6] === symbol))) {
		gameboard[3] = computerSymbol;
		spaces[3].innerHTML = computerSymbol;
		computerMove(3);
	} else if (gameboard[4] === '' && ((gameboard[3] === symbol && gameboard[5] === symbol) || (gameboard[1] === symbol && gameboard[7] === symbol) || (gameboard[0] === symbol && gameboard[8] === symbol) || (gameboard[2] === symbol && gameboard[6] === symbol))) {
		gameboard[4] = computerSymbol;
		spaces[4].innerHTML = computerSymbol;
		computerMove(4);
	} else if (gameboard[5] === '' && ((gameboard[3] === symbol && gameboard[4] === symbol) || (gameboard[2] === symbol && gameboard[8] === symbol))) {
		gameboard[5] = computerSymbol;
		spaces[5].innerHTML = computerSymbol;
		computerMove(5);
	} else if (gameboard[6] === '' && ((gameboard[7] === symbol && gameboard[8] === symbol) || (gameboard[0] === symbol && gameboard[3] === symbol) || (gameboard[2] === symbol && gameboard[4] === symbol))) {
		gameboard[6] = computerSymbol;
		spaces[6].innerHTML = computerSymbol;
		computerMove(6);
	} else if (gameboard[7] === '' && ((gameboard[6] === symbol && gameboard[8] === symbol) || (gameboard[1] === symbol && gameboard[4] === symbol))) {
		gameboard[7] = computerSymbol;
		spaces[7].innerHTML = computerSymbol;
		computerMove(7);
	} else if (gameboard[8] === '' && ((gameboard[2] === symbol && gameboard[5] === symbol) || (gameboard[6] === symbol && gameboard[7] === symbol) || (gameboard[0] === symbol && gameboard[4] === symbol))) {
		gameboard[8] = computerSymbol;
		spaces[8].innerHTML = computerSymbol;
		computerMove(8);
	} else {
		goComputer = Math.floor(Math.random() * 9);
		if (gameboard[goComputer] === '') {
			gameboard[goComputer] = computerSymbol;
			spaces[goComputer].innerHTML = computerSymbol;
			computerMove(goComputer);
		} else {
			if (clicks >= 9) {
				turn.innerHTML = "The game was a draw. New game. It's X's turn to go.";
				clearBoard();
			} else {
				neverLose();
			}
		}
	}
}

function emptySpace(event) {
	if (event.target.innerHTML !== '&nbsp;') {
		turn.innerHTML = 'Player ' + symbol +': That spot is already taken. Go again.';
	} else {
		event.target.innerHTML = symbol;
		gameboard[event.target.getAttribute('data-num')] = symbol;
		if (symbol === 'X') {
			event.target.classList.add('red');
			turn.innerHTML = "It's O's turn to go.";
			arrX.push(parseInt(event.target.getAttribute('data-num')));
			clicks++;
			if (checkForWin(arrX) === true) {
				turn.innerHTML = "Player X won! New game. It's X's turn to go.";
        xWins++;
        leftScoreSpan.innerHTML = xWins;
      	clearBoard();
      	return false;
			}
			neverLose();
		} else {
			event.target.classList.add('blue');
			turn.innerHTML = "It's X's turn to go.";
			arrO.push(parseInt(event.target.getAttribute('data-num')));
			clicks++;
			if (checkForWin(arrO) === true) {
				turn.innerHTML = "Player O won! New game. It's X's turn to go.";
        oWins++;
        rightScoreSpan.innerHTML = oWins;
      	clearBoard();
      	return false;
			}
			neverLose();
		}
		if (clicks >= 9) {
			turn.innerHTML = "The game was a draw. New game. It's X's turn to go.";
			clearBoard();
		}
	}
}

function checkForWin(moves){
  for (var i = 0; i < winningMoves.length; i++) {
    inRow = 0;
    for (var j = 0; j < winningMoves[i].length; j++) {
      if (moves.indexOf(winningMoves[i][j]) > -1){
        inRow++;
        if (inRow === 3) return true;
      }
    }
  }
  return false;
}

function clearBoard() {
	for (var i = 0; i < spaces.length; i++) {
		spaces[i].innerHTML = "&nbsp;";
		spaces[i].classList.remove('red');
		spaces[i].classList.remove('blue');
	}
	clicks = 0;
	arrX = [];
	arrO = [];
	gameboard = ['', '', '', '', '', '', '', '', ''];
	if (computerSymbol === 'X') neverLose();
}

function resetScores() {
	clearBoard();
	xWins = 0;
	oWins = 0;
	rightScoreSpan.innerHTML = "0";
	leftScoreSpan.innerHTML = "0";
	turn.innerHTML = "Scores reset. It's X's turn to go.";
}
