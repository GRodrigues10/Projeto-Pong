const gameBoard = document.querySelector('#gameBoard');

const ctx = gameBoard.getContext('2d');

const scoreText = document.querySelector('#scoreText');

const resetBtn = document.querySelector('#resetbtn');

const gameWidth = gameBoard.width;

const gameheight = gameBoard.width;

const borderBackground = 'forestgreen';

const paddle1Color = 'blue';
const paddle2Color = 'red';

const paddleBorder = 'black';

const ballColor = 'white';

const ballBorderColor = 'black';

const ballRadius = '12.5';

const paddleSpeed = 50;

let intervalId;

let ballSpeed = 1;

let ballX = gameWidth / 2;

let ballY = gameWidth / 2;

let ballXDirecetion = 0;

let ballYDirecetion = 0;

let player1Score = 0;

let player2Score = 0;

let paddle1 = {
    width:25,
    heigth: 100,
    x: 0,
    y: 0,
}

let paddle2 = {
    width:25,
    heigth: 100,
    x: gameWidth - 25,
    y: gameWidth - 100,
};

window.addEventListener('keydown', changeDirectionFunction);

resetBtn.addEventListener('click', resetGame);

gameStart();

function gameStart(){

}




