import * as THREE from 'three'

/**
 * background objects abstract class.
 */
export default abstract class Shape {

  abstract mesh: THREE.Object3D
  abstract speed: number
  private forward = true;

  /**
   * mesh getter.
   * @returns mesh
   */
  public getMesh(): THREE.Object3D {
    return this.mesh
  }

  /**
   * animation.
   */
  public animate(time: number, scale: number): void {
    if(this.forward) {
      this.fall(time)
    } else {
      this.reverse(time, scale)
    }
  }

  /**
   * fall animation.
   */
  public fall(time: number): void {
    this.mesh.position.y -= time + this.speed
    if(this.mesh.position.y < -100) {
      this.mesh.position.y = 100
    }
    this.mesh.rotation.x += time + (this.speed * .3)
    this.mesh.rotation.y += time + (this.speed * .2)
  }

  /**
   * reverse animation.
   */
  public reverse(time: number, scale: number): void {
    this.mesh.position.y += time + this.speed + ( this.speed * scale * .2)
    if(this.mesh.position.y > 100) {
      this.mesh.position.y = -100
    }
    this.mesh.rotation.x -= time + (this.speed * .3) + (this.speed * scale * .1)
    this.mesh.rotation.y -= time + (this.speed * .2) + (this.speed * scale * .1)
  }

  /**
   * set forward flag to false.
   */
  public setReverseFlg(): void {
    this.forward = false
  }

  /**
   * set forward flag to true.
   */
  public setForwardFlg(): void {
    this.forward = true
  }

  /**
   * Returns if its in forward move.
   * @returns true: is in forward move, false: is in reverse move
   */
  public isForward(): boolean {
    return this.forward
  }

}