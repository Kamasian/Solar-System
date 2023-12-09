import fetchPlanetNames from '../services/fetchPlanetNames.js'
import focusPlanet from './focusPlanet.js'

export default async function createPlanetButtons() {
    try {
        const buttonsContainer = document.getElementById('buttons-container')
        const planetNames = await fetchPlanetNames()

        planetNames.forEach((planetName) => {
            const button = document.createElement('div')
            button.classList.add('planet-button')
            button.dataset.planet = planetName.toLowerCase()

            const image1 = document.createElement('img')
            image1.classList.add('image1')
            image1.src = '/assets/img/buttons/button-planet.png'
            image1.alt = ''

            const image2 = document.createElement('img')
            image2.classList.add('image2')
            image2.src = '/assets/img/buttons/button-ring.png'
            image2.alt = ''

            const image3 = document.createElement('img')
            image3.classList.add('image3')
            image3.src = '/assets/img/buttons/button-ring.png'
            image3.alt = ''

            const image4 = document.createElement('img')
            image4.classList.add('image4')
            image4.src = '/assets/img/buttons/button-ring.png'
            image4.alt = ''

            const textElement = document.createElement('p')
            textElement.classList.add('planet-text')
            textElement.textContent = planetName

            button.appendChild(image1)
            button.appendChild(image4)
            button.appendChild(image3)
            button.appendChild(image2)
            button.appendChild(textElement)
            buttonsContainer.appendChild(button)

            button.onclick = function () {
                focusPlanet(planetName.toLowerCase())
            };
        });
    } catch (error) {
        console.error('Erreur lors du chargement des noms de planètes :', error)
    }
}