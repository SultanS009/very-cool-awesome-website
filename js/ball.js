const ball = document.createElement('div')
const ballRadius = 90
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

createBall()
function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2}px`
    ball.style.left = `${windowWidth / 2}px`
}
