const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')
const element5 = document.getElementById('element5')


element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <br> Try double clicking me."
})


element1.addEventListener('dblclick', ()=>{
    element.innerHTML = "I've been double clicked! <br> Try single clicking me."
})
