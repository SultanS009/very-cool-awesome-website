const main = document.querySelector('main')
const voiceSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        image: '../drink.jpg',
        text: "I am Thirsty"
    },
    {
        image: '../food.jpg',
        text: "I am Hungry"
    },
    {
        image: '../tired.jpg',
        text: "I am Tired"
    },
    {
        image: '../tired.jpg',
        text: "I am Tired"
    },
    {
        image: '../hurt.jpg',
        text: "I am Hurt"
    },
    {
        image: '../happy.jpg',
        text: "I am Happy"
    },
    {
        image: '../angry.jpg',
        text: "I am Angry"
    },
    {
        image: '../sad.jpg',
        text: "I am Sad"
    },
    {
        image: '../scared.jpg',
        text: "I am Scared"
    },
    {
        image: '../outside.jpg',
        text: "I Want To Go Outside"
    },
    {
        image: '../home.jpg',
        text: "I Want To Go Home"
    },
    {
        image: '../school.jpg',
        text: "I Want To Go To School"
    },
    {
        image: '../grandma.jpg',
        text: "I Want To Go To My Grandmas"
    },
]


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

        //add acitve effect
        box.classList.add('active')
        setTimeout(box.classList.remove('active'), 800)
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
function setVoice(e) {
    message.voice = voices.find(voice => voice.name == e.target.value)
}

getVoices()


// read text button
readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value)
    speakText()
})
