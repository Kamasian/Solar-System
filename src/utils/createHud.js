import hudImagePaths from "./hudImages.js"
import typeWriterEffect from "./textAnimation"

function createAllElementsHud() {
    const hudContainer = document.getElementById('hudContainer')

    for (let i = 0; i < 8; i++) {
        const hudElement = document.createElement('div')
        hudElement.classList.add('hudElement', `hudElement-${i + 1}`)

        if (i !== 0) {
            const img = document.createElement('img')
            img.src = hudImagePaths[i - 1]
            img.alt = `hud${i}`
            hudElement.appendChild(img)
        }

        hudContainer.appendChild(hudElement)
    }
}

function removeAllElementsHud() {
    const hudContainer = document.getElementById('hudContainer')
    while (hudContainer.children.length > 1) {
        hudContainer.removeChild(hudContainer.lastChild)
    }
}

function createHudElement1() {
    const hudElement1 = document.querySelector('.hudElement-1')
    let planetNameElement = hudElement1.querySelector('h1')

    if (!planetNameElement) {
        planetNameElement = document.createElement('h1')
        planetNameElement.id = 'planet-name'
        hudElement1.appendChild(planetNameElement)
    }

    return planetNameElement
}

function createHudElement2(planetKeys) {
    const hudElement2 = document.querySelector('.hudElement-2')

    try {
        if (planetKeys) {
            Object.keys(planetKeys[1]).forEach((key, i) => {
                const keyNumber = i + 1
                const paragraph = document.createElement('p')
                paragraph.classList.add('hudKey')
                paragraph.textContent = key
                paragraph.addEventListener('mouseenter', () => {
                    if (!document.querySelector(`.hudValue-${keyNumber}`)) {
                        displayValue(planetKeys[1][key], keyNumber, i)
                    }
                })

                hudElement2.appendChild(paragraph)
            })
        }
    } catch (error) {
        console.error('Erreur lors de la création des éléments HUD :', error)
    }
}

function displayValue(value, keyNumber, i) {
    let containerSelector

    if (keyNumber <= 3) {
        containerSelector = '.hudElement-5'
    } else if (keyNumber <= 6) {
        containerSelector = '.hudElement-6'
    } else if (keyNumber <= 8) {
        containerSelector = '.hudElement-4'
    } else {
        containerSelector = '.hudElement-7'
    }

    const hudElement = document.querySelector(containerSelector)
    const valueParagraph = document.createElement('p')
    valueParagraph.classList.add(`hudValue`, `hudValue-${i + 1}`)
    hudElement.appendChild(valueParagraph)

    typeWriterEffect(valueParagraph, value, 80)
}

export default function createHUD(planetKeys) {
    removeAllElementsHud()
    createAllElementsHud()

    const planetNameElement = createHudElement1()

    if (planetKeys) {
        createHudElement2(planetKeys)
    }

    return planetNameElement
}