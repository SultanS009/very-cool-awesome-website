const element3 = document.getElementById('element3')

let positionY = 0;
let positionX = 0;

document.addEventListener('keyup', (event)=>{
    console.log(event.key)

    if (event.key == 'ArrowDown')
    {
        positionY = positionY + 50
        element3.innerHTML = "<h3> When you hit the finsish line click the space bar</h3>"
    }
    else if (event.key == 'ArrowUp')
    {
        positionY = positionY - 50
    }
    else if (event.key == 'ArrowLeft')
    {
        positionX = positionX + 50
    }
    else if (event.key == 'ArrowRight')
    {
        positionX = positionX - 50
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`

})

const list = ['running', 'paused']
let index = 0
element3.addEventListener('click', ()=>{
    element3.style.animationPlayState = list[index]
    index = (index + 1) % 2
})


