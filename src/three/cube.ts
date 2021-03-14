import * as THREE from 'three'
import Shape from './shape'

export default class Cube extends Shape {
  /** mesh. */
  mesh: THREE.Object3D
  /** speed of rotate and fall. */
  speed: number

  constructor() {
    super()
    const size = Math.random() * 2 + 1
    const geom = new THREE.BoxBufferGeometry(size, size, size)
    const mat = new THREE.MeshBasicMaterial({color: 0xCDFAF2, wireframe: true})
    this.mesh = new THREE.Mesh(geom, mat)
    this.mesh.position.set(
      Math.random() * 180 - 90,
      Math.random() * 180 - 90,
      Math.random() * 40 - 60)
    this.speed = Math.random() * .2 + .1
  }

  reverse(): void {
    throw new Error('Method not implemented.')
  }
}