const element1 = document.getElementById('element1')
const body = document.querySelector('body')


document.addEventListener('keyup', (event)=>{
    console.log(event.key)
    if (event.key == 'd')
    {
        element1.innerHTML = "<h3>Click 'l' to enable light mode.</h3>"
        element1.style.color = "black"
        element1.style.backgroundColor = "white"
        body.style.backgroundColor = "black"
    }
})

document.addEventListener('keyup', (event)=>{
    console.log(event.key)
    if (event.key == 'l')
    {
        element1.innerHTML = "<h3>Click 'd' to enable dark mode.</h3>"
        element1.style.color = "white"
        element1.style.backgroundColor = "black"
        body.style.backgroundColor = "white"
    }
})

const list = ['running', 'paused']
let index = 0
element1.addEventListener('click', ()=>{
    element1.style.animationPlayState = list[index]
    index = (index + 1) % 2
})
