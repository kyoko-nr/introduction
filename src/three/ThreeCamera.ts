import { PerspectiveCamera, Vector3 } from "three";

export default class ThreeCamera extends PerspectiveCamera {
  private readonly _speed = 0.5;

  constructor(aspect: number, pos: Vector3) {
    super(45, aspect, 0.1, 300);
    this.position.copy(pos);
    this.lookAt(new Vector3(0, 0, 0));
  }

  animate(time: number) {
    const x = Math.cos(time * this._speed) * 100;
    const z = Math.sin(time * this._speed) * 100;
    this.position.setX(x);
    this.position.setZ(z);
    this.lookAt(new Vector3(0, 0, 0));
  }
}
