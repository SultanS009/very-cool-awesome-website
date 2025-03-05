const element3 = document.getElementById('element3')

let positionY = 0;
let positionX = 0;

document.addEventListener('keyup', (event)=>{
    console.log(event.key)

    if (event.key == 'ArrowDown')
    {
        positionY = positionY + 10
    }
    else if (event.key == 'ArrowUp')
    {
        positionY = positionY - 10
    }
    else if (event.key == 'ArrowLeft')
    {
        positionX = positionX + 10
    }
    else if (event.key == 'ArrowRight')
    {
        positionX = positionX - 10
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


