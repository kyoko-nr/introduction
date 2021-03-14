import * as THREE from 'three'
import gsap from 'gsap'

/**
 * background objects abstract class.
 */
export default abstract class Shape {

  abstract mesh: THREE.Object3D
  abstract speed: number

  /**
   * mesh getter.
   * @returns mesh
   */
  public getMesh(): THREE.Object3D {
    return this.mesh
  }

  /**
   * forward animation.
   */
  public animateFwd(): void {
    this.mesh.position.y -= this.speed
    if(this.mesh.position.y < -100) {
      this.mesh.position.y = 100
    }
    this.mesh.rotation.x += this.speed / 4
    this.mesh.rotation.y += this.speed / 4
  }

  /**
   * reverse move.
   */
  public reverse(): void {
    // TODO
  }

}