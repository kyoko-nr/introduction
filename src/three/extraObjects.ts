import * as THREE from 'three'

export default class ExtraObjects {
  /** mesh. */
  mesh: THREE.Object3D
  /** speed of rotate and fall. */
  speed = .2
  /** geometories. */
  geoms = [
    new THREE.SphereBufferGeometry(24, 12, 12),
    new THREE.BoxBufferGeometry(34, 34, 34),
    new THREE.ConeBufferGeometry(30, 40, 8),
    new THREE.OctahedronBufferGeometry(30),
    new THREE.IcosahedronBufferGeometry(30, 0)
  ]
  colors = [
    0xFDAF89,
    0xABCEFD,
    0xADA6B3,
    0xE3FBE2,
    0xEDE2C4
  ]

  /**
   * Constructor.
   * @param num number (should be 0 to 4)
   */
  constructor(num: number) {
    const mat = new THREE.MeshBasicMaterial({color: this.colors[num], wireframe: true})
    this.mesh = (new THREE.Mesh(this.geoms[num], mat))
    this.mesh.position.set(0, 0, 10)
  }

  /**
   * getter.
   * @returns mesh
   */
  getMesh(): THREE.Object3D {
    return this.mesh
  }
}