const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
const ball = document.createElement('div')
document.body.appendChild(ball)
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 20
let LPadelHeight = 100
let LPadelSpeed = 1
let LPadelYPosition = windowHeight / 2 - ballRadius
const ballRadius = 50
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
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition  > windowWidth - 2 * ballRadius)
    {
        ballXDirection = ballXDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPadelTop = LPadelYPosition
    let LPadelBottom = LPadelYPosition + LPadelHeight
    let LPadelRight = LPadelXPosition + LPadelWidth
}

function moveBallUp(){
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius)
    {
        ballYDirection = ballYDirection * -1
    }
}

if (ball)

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

createLPadel()
function createLPadel(){
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = 'blue'
    LPadel.style.position = 'absolute'
    LPadel.style.left = "50px"
    LPadel.style.top = `${LPadelYPosition}px`
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'w')
    {
        if (LPadelYPosition <= 0) {
            LPadelYPosition = 0
        }
        else {
            LPadelYPosition = LPadelYPosition - LPadelSpeed
        }
    }
    if (event.key == 's')
    {
        if (LPadelYPosition >= windowHeight - LPadelHeight) {
            LPadelYPosition = windowHeight - LPadelHeight
        }
        else {
            LPadelYPosition = LPadelYPosition + LPadelSpeed
        }
    }
    LPadel.style.top = `${LPadelYPosition}px`
})
function movePadel(){


}
