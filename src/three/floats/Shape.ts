import * as THREE from "three";

/**
 * Abstract class of floating object
 */
export default abstract class Shape extends THREE.Object3D {
  abstract readonly _speed: number;
  private _forward = true;

  /**
   * animate shape.
   * @param time second
   * @param scale speed scale
   */
  public animate(time: number, scale: number): void {
    if (this._forward) {
      this.fall(time);
    } else {
      this.reverse(time, scale);
    }
  }

  /**
   * fall animation.
   * @param time second
   */
  public fall(time: number): void {
    this.position.y -= time * this._speed;
    if (this.position.y < -100) {
      this.position.y = 100;
    }
    this.rotate(time);
  }

  /**
   * rotate shape
   * @param time second
   */
  public rotate(time: number) {
    this.rotation.x += time * this._speed;
    this.rotation.y += time * this._speed;
  }

  /**
   * reverse animation.
   * @param time second
   * @param scale speed scale
   */
  public reverse(time: number, scale: number): void {
    this.position.y += time * this._speed * scale;
    if (this.position.y > 100) {
      this.position.y = -100;
    }
    this.rotateReverse(time, scale);
  }

  /**
   * reverse rotate shape.
   * @param time second
   * @param scale speed scale
   */
  public rotateReverse(time: number, scale: number) {
    this.rotation.x -= time * this._speed * scale;
    this.rotation.y -= time * this._speed * scale;
  }

  /**
   * set forward flag to false.
   */
  public setReverseFlg(): void {
    this._forward = false;
  }

  /**
   * set forward flag to true.
   */
  public setForwardFlg(): void {
    this._forward = true;
  }

  /**
   * Returns if it's moving.
   */
  public isForward(): boolean {
    return this._forward;
  }
}
