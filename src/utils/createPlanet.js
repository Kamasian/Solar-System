import * as THREE from 'three';
import { renderer, scene } from '../../main.js';
import texturePaths from './textures.js';

export function createPlanet(size, texturePath, position, ring, isSun = true) {
    const geometry = new THREE.SphereGeometry(size, 1000, 1000);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(texturePath);

    texture.anisotropy = renderer.capabilities.getMaxAnisotropy() * 2;
    texture.generateMipmaps = true;

    let material;
    if (isSun) {
        material = new THREE.MeshBasicMaterial({ map: texture });
    } else {
        material = new THREE.MeshPhongMaterial({ map: texture });
    }

    const planet = new THREE.Mesh(geometry, material);
    const planetObj = new THREE.Object3D();
    planetObj.add(planet);
    scene.add(planetObj);
    planet.position.x = position;

    if (ring) {
        const RingGeo = new THREE.RingGeometry(
            ring.innerRadius, ring.outerRadius, 100, 30
        );
        const textureload = new THREE.TextureLoader();
        const RingMat = new THREE.MeshPhongMaterial({
            map: textureload.load(ring.texture),
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8
        });

        const Ring = new THREE.Mesh(RingGeo, RingMat);
        planetObj.add(Ring);
        Ring.position.x = position;
        Ring.rotation.x = -0.5 * Math.PI;
    }

    const orbit = new THREE.EllipseCurve(
        0, 0,
        position, position,
        0, 2 * Math.PI,
        false,
        0
    );

    const orbitPoints = orbit.getPoints(200);
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);

    orbitGeometry.rotateX(Math.PI / 2);

    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x00b3ff, transparent: true, opacity: 0.3 });
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
    scene.add(orbitLine);

    textureLoader.load(texturePath, (texture) => {
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy() * 2;
        material.map = texture;
        material.needsUpdate = true;
    });

    return { planet, planetObj, orbitLine };
}

export default function createAllPlanets() {
    return {
        sun: createPlanet(57, texturePaths.sun, 0, null, true),
        mercury: createPlanet(1.00, texturePaths.mercury, 81.88, null, false),
        venus: createPlanet(2.48, texturePaths.venus, 92.13, null, false),
        earth: createPlanet(2.61, texturePaths.earth, 100.66, null, false),
        mars: createPlanet(1.39, texturePaths.mars, 116.56, null, false),
        jupiter: createPlanet(28.69, texturePaths.jupiter, 229.68, null, false),
        saturn: createPlanet(23.84, texturePaths.saturn, 362.05, {
            innerRadius: 40,
            outerRadius: 55,
            texture: texturePaths.saturnRing
        }, false),
        uranus: createPlanet(10.40, texturePaths.uranus, 658.02, null, false),
        neptune: createPlanet(10.09, texturePaths.neptune, 992.69, null, false)
    };
}