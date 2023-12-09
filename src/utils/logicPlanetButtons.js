import { orbitAnimationState, orbit, camera } from '../../main.js'
import randomLetters from './randomLetters'
import focusPlanet from './focusPlanet.js'
import createHUD from './createHud.js'
import fetchPlanetKeys from '../services/fetchPlanetKeys.js'

export default function logicPlanetButtons() {
    const buttonsContainer = document.getElementById('buttons-container')
    const planetNameElement = createHUD()

    buttonsContainer.addEventListener('click', async (event) => {
        const hudContainer = document.getElementById('hudContainer')
        const targetButton = event.target.closest('.planet-button')

        if (targetButton) {
            const planetName = targetButton.getAttribute('data-planet')

            planetNameElement.textContent = planetName;

            buttonsContainer.querySelectorAll('.planet-button').forEach((button) => {
                if (button !== targetButton) {
                    button.classList.remove('selected')
                }
            })

            const isSelected = targetButton.classList.toggle('selected')

            if (isSelected) {
                orbitAnimationState.value = false
                const planetKeys = await fetchPlanetKeys(planetName)
                focusPlanet(planetName)
                randomLetters(planetNameElement, planetName)
                createHUD(planetKeys, planetNameElement)
            } else {
                orbitAnimationState.value = true
                camera.position.set(-1000, 1000, 300)
                orbit.target.set(0, 0, 0)
                orbit.update()
                hudContainer.style.opacity = '0'
                hudContainer.style.pointerEvents = 'none'
            }
        }
    })
}