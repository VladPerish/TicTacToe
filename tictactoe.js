//JS code goes
// var restart = document.querySelector('#b');
//
// var squares = document.querySelectorAll("td")
// for (var i = 0; i < squares.length; i++) {
//     squares[i].textContent = '';
// }
//
// }
// restart.addEventListener('click',clearBoard)
var turn = false;
function play (event) {
	if(!event.target.innerText) {
		event.target.innerText = turn? "O": "X";
		turn = !turn;
	}
}

var gameOver= false;
function checkBoard(game over) {

}
