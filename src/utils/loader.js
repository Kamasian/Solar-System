import * as webglFluid from 'webgl-fluid'

const loader = document.getElementById('loader')
const JokerContainer = document.getElementById('JokerContainer')
const JokerPicture = document.createElement('img')
const JokerLink = document.createElement('a')
const presentationText = document.createElement('p')

presentationText.innerHTML = 'Solar Sytem </br></br> by </br></br>JokerDev'
JokerPicture.src = '/assets/img/JokerDev.png'
JokerPicture.alt = 'Joker'
JokerLink.href = 'https://github.com/Kamasian'
JokerLink.target = '_blank'
JokerLink.appendChild(JokerPicture)
JokerContainer.appendChild(presentationText)
JokerContainer.appendChild(JokerLink)

webglFluid.default(loader, {

    TRANSPARENT: true,
    IMMEDIATE: false,
    TRIGGER: 'click',
    SIM_RESOLUTION: 64,
    DYE_RESOLUTION: 512,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 1,
    VELOCITY_DISSIPATION: 1,
    PRESSURE: 1,
    PRESSURE_ITERATIONS: 60,
    CURL: 20,
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 10000,
    SHADING: true,
    COLORFUL: true,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: {
        r: 0,
        g: 0,
        b: 0
    },
    BLOOM: true,
    BLOOM_ITERATIONS: 1,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: true,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 1.0
})

setTimeout(() => {
    loader.classList.add('hidden')
    JokerContainer.classList.add('hidden')
}, 5000)