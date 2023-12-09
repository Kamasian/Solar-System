import { createRenderer, createScene, createCamera, createCubeLoader } from './src/utils/renderer.js'
import initOrbitControls from './src/utils/initOrbitControls.js'
import { ambient, pointLight } from './src/utils/lightScene.js'
import createPlanetButtons from './src/utils/createPlanetButtons.js'
import logicPlanetButtons from './src/utils/logicPlanetButtons.js'
import createAllPlanets from './src/utils/createPlanet.js'
import { startAnimationLoop, setupResizeListener } from './src/utils/animationLogic.js'

// penser à surveiller l'exportation des variables ci dessous, si modification.
export const renderer = createRenderer()
export const scene = createScene()
export const camera = createCamera()
export const orbit = initOrbitControls()
export const planets = createAllPlanets()
export let orbitAnimationState = { value: true }

createCubeLoader(scene)
pointLight(scene)
ambient(scene)
startAnimationLoop()
setupResizeListener()
createPlanetButtons()
logicPlanetButtons()
orbit.update()