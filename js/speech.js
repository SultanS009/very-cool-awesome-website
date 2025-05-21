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

    box.addEventListener('click', () => {
        setTextMessage(item.2text)
        speakText()
    })

    main.appenedChild(box)
}


//intialize speech synthesis
const message = new SpeechSynthesisUtterance()

//set text
function setTextMessage(text) {
    message.text = text
}

//speed text
function speakText() {
    speechSynthesis.speak(message)
}

// toggle text box
toggleBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.toggle('show')
})

// close text box
closeBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.remove('show')
})

let voices = []

function getVoices() {
    vocies = speechSynthesis.getVoices()

    voices.forEach(voice => {
        const option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`
        voicesSelect.appendChild(option)
    })
}


//voices change
speechSynthesis.addEventListener('voiceschanged', getVoices)


//change voice
voicesSelect.addEventListener('change', setVoice)

//set voice
function setVoice(e)

getVoices()
