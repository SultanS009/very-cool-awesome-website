const element1 = document.getElementById('element1')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "<h3>Click me to enable dark mode.</h3>"
    element1.style.color = "black"
    element1.style.backgroundColor = "white"
})

element1.addEventListener('dblclick', ()={
    element1.innerHTML = "<h3>Click me to enable light mode.</h3>"
    element1.style.color = "white"
    element1.style.backgroundColor = "black"
})
