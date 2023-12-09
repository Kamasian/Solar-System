import * as THREE from 'three'
import texturePaths from './textures.js'

export function createRenderer() {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.domElement.id = 'solarCanvas'
    document.body.appendChild(renderer.domElement)
    renderer.gammaOutput = false
    return renderer
}

export function createScene() {
    return new THREE.Scene()
}

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000)
    camera.position.set(-1000, 800, 300)
    return camera
}

export function createCubeLoader(scene) {
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    scene.background = cubeTextureLoader.load([
        texturePaths.stars,
        texturePaths.stars,
        texturePaths.stars,
        texturePaths.stars,
        texturePaths.stars,
        texturePaths.stars
    ]);
}