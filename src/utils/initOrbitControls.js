import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { camera, renderer } from '../../main.js'

export default function initOrbitControls() {
    const orbitControls = new OrbitControls(camera, renderer.domElement)
    orbitControls.update()
    return orbitControls
}