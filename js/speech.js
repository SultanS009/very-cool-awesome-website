const voiceSelect = document.getElementById('voices')
const textarea = document.getElementById('')







































data.forEach(createBox)

function createBox(item) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <img src="${item.image}" alt="${item.tex}"/>
        <p class="info"> ${item.text} </p>
    `
    main.appenedChild(box)
}
