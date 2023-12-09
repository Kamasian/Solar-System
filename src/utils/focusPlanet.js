import * as THREE from 'three'
import { planets, camera, orbit, renderer, scene } from '../../main.js'

export default function focusPlanet(planetName) {

    const planet = planets[planetName].planet
    const planetWorldPosition = new THREE.Vector3()
    const distanceCoefficient = 4
    planet.getWorldPosition(planetWorldPosition)
    const distance = planet.geometry.parameters.radius * distanceCoefficient
    const offset = new THREE.Vector3(0, distance, distance)
    const cameraPosition = planetWorldPosition.clone().add(offset)
    const hudContainer = document.getElementById('hudContainer')

    camera.position.copy(cameraPosition)
    orbit.target.copy(planetWorldPosition)
    orbit.update()
    hudContainer.style.opacity = '1'
    hudContainer.style.pointerEvents = 'auto'
    renderer.render(scene, camera)
};

window.focusPlanet = focusPlanet