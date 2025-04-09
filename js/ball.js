const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


const LPaddel = document.createElement('div')
document.body.appendChild(LPaddel)
let LPaddelWidth = 10
let LPaddelHeight = 100
let LPaddelSpeed = 5
let LPaddelYPosition = windowHeight / 2 - ballRadius
let LPaddelXPosition = 70

const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 20
let ballXPosition = windowWidth / 2 - ballRadius
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1
let ballSpeed = 5

let score = 0 // Display score and increase the score by 1 everytime the ball hits the paddel.
let level = 1 // Display the level and increase the level by 1 everytime the score increases by 10.
// As level increases, increase the ball speed and make it more difficult
// If the ball gets past the paddel, end the game.
// make the ball stop or disapear and let the user know game over
// Optional: sound effects, background music, color change for every bounce.

setInterval(moveBall, 10)
setInterval(moveBallUp, 10)


function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${BallYPosition}px`
    if (ballYPosition < 0 || ballYPosition  > windowWidth - 2 * ballRadius)
    {
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition  > windowWidth - 2 * ballRadius)
        {
            ballXDirection = ballXDirection * -1
        }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddelTop = LPaddelYPosition
    let LPaddelBottom = LPaddelYPosition + LPaddelHeight
    let LPaddelRight = LPaddelXPosition + LPaddelWidth

    if (ball)
}



createBall()
function createBall(){

    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${windowWidth / 2 - ballRadius}px`
}

createLPaddel()
function createLPaddel(){
    LPaddel.style.height = `${LPaddelHeight}px`
    LPaddel.style.width = `${LPaddelWidth}px`
    LPaddel.style.backgroundColor = 'blue'
    LPaddel.style.position = 'absolute'
    LPaddel.style.left = "50px"
    LPaddel.style.top = `${LPaddelYPosition}px`
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'w')
    {
        if (LPaddelYPosition <= 0) {
            LPaddelYPosition = 0
        }
        else {
            LPaddelYPosition = LPaddelYPosition - LPaddelSpeed
        }
    }
    if (event.key == 's')
    {
        if (LPaddelYPosition >= windowHeight - LPaddelHeight) {
            LPaddelYPosition = windowHeight - LPaddelHeight
        }
        else {
            LPaddelYPosition = LPaddelYPosition + LPaddelSpeed
        }
    }
    LPaddel.style.top = `${LPaddelYPosition}px`
})
function movePaddel(){


}
