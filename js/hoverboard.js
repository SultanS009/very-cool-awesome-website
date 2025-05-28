// Java Script Time
const container = document.getElementById('container')
const colors = ["aliceblue","azure","blue","cadetblue", "cornflowerblue", "darkblue", "deepskyblue", "dodgerblue", "lightblue","lightskyblue", "lightsteelblue", "mediumblue", "midnightblue", "navy", "powderblue", "royalblue", "skyblue", "steelblue"
]
const SQUARES = 500

for(let i = 0; i < SQUARES; i++)
{
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout' , () => removeColor(square))
    container.appendChild(square)
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px Black'
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
