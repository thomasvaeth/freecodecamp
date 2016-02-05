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
		computerMove();
	});
}

function visibilePage() {
	document.getElementById('symbol-container').style.display = 'none';
	document.getElementsByClassName('container')[0].style.visibility = 'visible';
	document.getElementsByClassName('container')[1].style.visibility = 'visible';
	rightScore.style.visibility = 'visible';
	leftScore.style.visibility = 'visible';
}

function computerMove() {
	goComputer = Math.floor(Math.random() * 9);
	if (gameboard[goComputer] === '') {
		gameboard[goComputer] = computerSymbol;
		spaces[goComputer].innerHTML = computerSymbol;
		if (computerSymbol === 'X') {
			spaces[goComputer].classList.add('red');
			turn.innerHTML = "It's O's turn to go.";
			arrX.push(parseInt(spaces[goComputer].getAttribute('data-num')));
			clicks++;
			if (checkForWin(arrX) === true) {
				turn.innerHTML = "Computer X won! New game. It's X's turn to go.";
        xWins++;
        leftScoreSpan.innerHTML = xWins;
      	clearBoard();
			}
		} else {
			spaces[goComputer].classList.add('blue');
			turn.innerHTML = "It's X's turn to go.";
			arrO.push(parseInt(spaces[goComputer].getAttribute('data-num')));
			clicks++;
			if (checkForWin(arrO) === true) {
				turn.innerHTML = "Computer O won! New game. It's X's turn to go.";
        oWins++;
        rightScoreSpan.innerHTML = oWins;
      	clearBoard();
			}
		}	
	} else {
		if (clicks >= 9) {
			turn.innerHTML = "The game was a draw. New game. It's X's turn to go.";
			clearBoard();
		} else {
			computerMove();
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
			computerMove();
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
			computerMove();
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
        if (inRow === 3) {
        	return true
        }
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
	if (computerSymbol === 'X') {
		computerMove();
	}
}

function resetScores() {
	clearBoard();
	xWins = 0;
	oWins = 0;
	rightScoreSpan.innerHTML = "0";
	leftScoreSpan.innerHTML = "0";
	turn.innerHTML = "Scores reset. It's X's turn to go.";
}
