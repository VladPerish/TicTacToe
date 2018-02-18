// // JS code goes here

var Player_1_Win_counter = 0;
var Player_2_Win_counter = 0;
var Player_1_defeat_counter = 0;
var Player_2_defeat_counter = 0;
var turnCount = 0;

function startGame() {
	for (var i = 0; i < 9; i++) {
		restartGame(i);
		turnCount = 0;
	}
	document.turn = "X";
	document.winner = null;
	setStatus(document.turn + " get's to start");
}

function setStatus(msg) {
	document.getElementById("message").innerText = msg;
}

function play(square) {
	if (document.winner != null) {
		if (document.turn == "X") {
			setStatus("Player 1 already won!");
		} else {
			setStatus("Player 2 already won!");
		}
	} else if (square.innerText == "") {
		square.innerText = document.turn;
		switchTurn();
	} else if (turnCount >= 9 && document.winner == null) {
		setStatus("Match draw");
	} else {
		setStatus("You can't pick this box")
	}
}

function restartGame(number) {
	document.getElementById(number).innerText = "";
}


function switchTurn() {
	turnCount++;
	if (checkWinner(document.turn)) {
		if (document.turn == "X") {
			setStatus("Congrats! Player 1 has won!");
		} else if (document.turn == "Y") {
			setStatus("Congrats! Player 2 has won!");
		}
		document.winner = document.turn;
	}
	 else if (document.turn == "X") {
		document.turn = "O";
		setStatus("It's " + document.turn + " turn now");
	} else if (document.turn == "O") {
		document.turn = "X";
		setStatus("It's " + document.turn + " turn now");
	} else if(!checkWinner(document.turn)) {
		setStatus("Draw");
	}
}

function checkWinner(move) {
	var result = false;
	if (RowCheck(0,1,2,move) ||
		RowCheck(3,4,5,move) ||
		RowCheck(6,7,8,move) ||
		RowCheck(0,3,6,move) ||
		RowCheck(1,4,7,move) ||
		RowCheck(2,5,8,move) ||
		RowCheck(0,4,8,move) ||
		RowCheck(2,4,6,move)) {
		result = true;
		if (document.turn == "X") {
			Player_1_Win_counter++;
			Player_2_defeat_counter++;
			document.getElementById("winP1").innerText = Player_1_Win_counter;
			document.getElementById("lostP2").innerText = Player_2_defeat_counter;
		} else {
			Player_2_Win_counter++;
			Player_1_defeat_counter++;
			document.getElementById("winP2").innerText = Player_2_Win_counter;
			document.getElementById("lostP1").innerText = Player_1_defeat_counter;
		}
	} else {
		result = false;
		return result;
	}

	return result;
}

function RowCheck(a, b, c, move) {
	var result = false;
	if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	}

	return result;
}

function getBox(number) {
	return document.getElementById(number).innerText;
}
