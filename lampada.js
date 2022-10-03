const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

var isBroken = false

function lampOn() {
    if (!isBroken) {
        lamp.src = './img/ligada.jpg'
    }

}

function lampOff() {
    if (!isBroken) {
        lamp.src = './img/desligada.jpg'
    }

}

function lampBroken() {
    if (!isBroken) {
        isBroken = true
        lamp.src = './img/quebrada.jpg'
    }
}


turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)