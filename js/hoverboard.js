// Java Script Time
const container = document.getElementById('container')
const colors = ["red", "purple", "green", "blue", "yellow", "hotpink", "orange"]
const SQUARES = 500

for(let i = 0; i < SQUARES; i++)
{
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
