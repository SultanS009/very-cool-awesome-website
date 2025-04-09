const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const ballRadius = 20;

const LPaddel = document.createElement('div');
document.body.appendChild(LPaddel);
let LPaddelWidth = 10;
let LPaddelHeight = 100;
let LPaddelSpeed = 5;
let LPaddelYPosition = windowHeight / 2 - LPaddelHeight / 2;
let LPaddelXPosition = 30;

const ball = document.createElement('div');
document.body.appendChild(ball);
let ballXPosition = windowWidth / 2 - ballRadius;
let ballXDirection = 1;
let ballYPosition = windowHeight / 2 - ballRadius;
let ballYDirection = 1;
let ballSpeed = 5;

const scoreElement = document.createElement('div');
document.body.appendChild(scoreElement);
let score = 0;

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;

    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection *= -1;
    }

    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection *= -1;
    }

    let ballTop = ballYPosition;
    let ballBottom = ballYPosition + 2 * ballRadius;
    let ballLeft = ballXPosition;
    let LPaddelTop = LPaddelYPosition;
    let LPaddelBottom = LPaddelYPosition + LPaddelHeight;
    let LPaddelRight = LPaddelXPosition + LPaddelWidth;

    if (
        ballBottom >= LPaddelTop &&
        ballTop <= LPaddelBottom &&
        ballLeft <= LPaddelRight &&
        ballXDirection === -1
    ) {
        ballXDirection *= -1;
    }

    if (
        ballBottom >= LPaddelTop &&
        ballTop <= LPaddelBottom &&
        ballLeft <= LPaddelRight
    ) {
        score += 1;
    }

    scoreElement.textContent = `Score: ${score}`;
}

function createBall() {
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "red";
    ball.style.position = "absolute";
    ball.style.top = `${ballYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
}

function createLPaddel() {
    LPaddel.style.height = `${LPaddelHeight}px`;
    LPaddel.style.width = `${LPaddelWidth}px`;
    LPaddel.style.backgroundColor = 'blue';
    LPaddel.style.position = 'absolute';
    LPaddel.style.left = `${LPaddelXPosition}px`;
    LPaddel.style.top = `${LPaddelYPosition}px`;
}

function createScoreElement() {
    scoreElement.style.position = 'absolute';
    scoreElement.style.top = '10px';
    scoreElement.style.left = '10px';
    scoreElement.style.fontSize = '20px';
    scoreElement.style.font = "Sans"
    scoreElement.style.color = 'black';
    scoreElement.textContent = `Score: ${score}`;
}

let wKey = false;
let sKey = false;

document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        wKey = true;
    }
    if (event.key === 's') {
        sKey = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        wKey = false;
    }
    if (event.key === 's') {
        sKey = false;
    }
});

function updateScoreDisplay() {
    scoreElement.style.color = "black";
    scoreElement.style.fontSize = "20px";
}

function moveLPaddel() {
    if (wKey && LPaddelYPosition > 0) {
        LPaddelYPosition -= LPaddelSpeed;
    }
    if (sKey && LPaddelYPosition < windowHeight - LPaddelHeight) {
        LPaddelYPosition += LPaddelSpeed;
    }
    LPaddel.style.top = `${LPaddelYPosition}px`;
}

function animate() {
    moveBall();
    moveLPaddel();
    updateScoreDisplay();
    requestAnimationFrame(animate);
}

createBall();
createLPaddel();
createScoreElement();
animate();
