import { orbitAnimationState, planets, renderer, scene, camera } from '../../main.js'

function animateOrbit() {
    const coefficientEarthOrbit = 1

    planets.sun.planetObj.rotateY(0.01 * (coefficientEarthOrbit / 160))
    planets.mercury.planetObj.rotateY(0.01 * (coefficientEarthOrbit / 0.24))
    planets.venus.planetObj.rotateY(0.01 * (coefficientEarthOrbit / 0.62))
    planets.earth.planetObj.rotateY(0.01 * coefficientEarthOrbit)
    planets.mars.planetObj.rotateY(0.01 * (coefficientEarthOrbit / 1.88))
    planets.jupiter.planetObj.rotateY(0.01 * (coefficientEarthOrbit / 11.86))
    planets.saturn.planetObj.rotateY(0.01 * (coefficientEarthOrbit / 29.46))
    planets.uranus.planetObj.rotateY(0.01 * (coefficientEarthOrbit / 84.01))
    planets.neptune.planetObj.rotateY(0.01 * (coefficientEarthOrbit / 164.79))
}

function animateRotation() {
    const coefficientEarthRotation = 1

    planets.sun.planet.rotateY(0.001 * (coefficientEarthRotation / 0.2))
    planets.mercury.planet.rotateY(0.01 * (coefficientEarthRotation / 0.58))
    planets.venus.planet.rotateY(0.01 * (coefficientEarthRotation / 1.16))
    planets.earth.planet.rotateY(0.01 * coefficientEarthRotation)
    planets.mars.planet.rotateY(0.01 * (coefficientEarthRotation / 1.03))
    planets.jupiter.planet.rotateY(0.01 * (coefficientEarthRotation / 0.41))
    planets.saturn.planet.rotateY(0.01 * (coefficientEarthRotation / 0.44))
    planets.uranus.planet.rotateY(0.01 * (coefficientEarthRotation / 0.72))
    planets.neptune.planet.rotateY(0.01 * (coefficientEarthRotation / 0.67))
}

function animate() {
    if (orbitAnimationState.value) {
        animateOrbit(planets)
    }
    animateRotation(planets)
    renderer.render(scene, camera)
}

export function setupResizeListener() {
    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })
}

export function startAnimationLoop() {
    renderer.setAnimationLoop(function () {
        animate()
    })
}