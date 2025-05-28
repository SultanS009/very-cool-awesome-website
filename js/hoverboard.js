// Java Script Time
const container = document.getElementById('container')
const colors = ["red", "purple", "green", "blue", "yellow", "indigo", "hotpink", "orange", "white", "darkgreen", "maroon", "darkblue"]
const SQUARES = 500

for(let i = 0; i < SQUARES; i++)
{
    const square = document.createElement('div')
    square.classList.add('square')
}
