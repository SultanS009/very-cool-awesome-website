const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const rightSide = document.querySelector('.right-side')
const leftSide = document.querySelector('.left-side')
const slidesLength = rightSide.querySelectorAll('.div').length

//first slide
currentSlide = 1 //slideLength = 4
leftSide.style.top = `${-(slideLenght - currentSlide)*100}%`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

function changeSlide(direction) {
    if (direction = 'up')
    {
        if (currentSlide == slideLength)
        {
            currentSlide = 0
        }
        currentSlide = currentSlide + 1

    }
    else (direction = 'down')
    {
        currentSlide = currentSlide - 1
        if (currentSlide == 0)
        {
            currentSlide = slideLength + 1
        }
    }
    leftSide.style.top = `${-(slideLenght - currentSlide)*100}%`
    rightSide.style.top = `${-(currentSlide - 1) * 100}%`
}

