import * as THREE from 'three'
import Shape from './shape'

export default class Cone extends Shape {
  /** mesh. */
  mesh: THREE.Object3D
  /** speed of rotate and fall. */
  speed: number

  constructor() {
    super()
    const size = Math.random() * 2 + 1
    const geom = new THREE.ConeBufferGeometry(size, size * 1.5, 6)
    const mat = new THREE.MeshBasicMaterial({color: 0xCDFAF2, wireframe: true})
    this.mesh = new THREE.Mesh(geom, mat)
    this.mesh.position.set(
      Math.random() * 180 - 90,
      Math.random() * 180 - 90,
      Math.random() * 40 - 60)
    this.speed = Math.random() * .2 + .1
  }

  public animateFwd(): void {
    this.mesh.position.y -= this.speed
    if(this.mesh.position.y < -100) {
      this.mesh.position.y = 100
    }
    this.mesh.rotation.x += this.speed / 4
    this.mesh.rotation.z += this.speed / 4
  }

  reverse(): void {
    throw new Error('Method not implemented.')
  }
}