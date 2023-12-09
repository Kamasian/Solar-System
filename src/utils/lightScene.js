import * as THREE from 'three'

export function ambient(scene) {
    const ambient = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambient)
}

export function pointLight(sun) {
    const pointLight = new THREE.PointLight(0xffffff, 2000, 500)
    sun.add(pointLight)
}