import * as THREE from 'three'

export default class Cube {
  private geom = new THREE.BoxBufferGeometry(3, 3, 3)
  private mat = new THREE.MeshBasicMaterial({color: 0xCDFAF2, wireframe: true})
  private mesh = new THREE.Mesh(this.geom, this.mat)

  getMesh() {
    return this.mesh
  }
  setPosition(x: number, y: number, z: number) {
    this.mesh.position.set(x, y, z)
  }
  setRotation(x: number, y: number, z: number) {
    this.mesh.rotation.x = x
    this.mesh.rotation.y = y
    this.mesh.rotation.z = z
  }
}