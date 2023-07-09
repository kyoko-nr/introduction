import { Group, Object3D } from "three";
import ClockRing from "./ClockRing";
import ClockSphere from "./ClockSphere";
import { RING_PROPS, SPHERE_PROPS } from "./consts/wireClockProps";

export default class WireClock extends Group {
  private readonly _rings: ClockRing[] = [];
  private readonly _spheres: ClockSphere[] = [];
  private readonly _rotateSpeed = 0.2;

  constructor() {
    super();

    RING_PROPS.forEach((props) =>
      this._rings.push(new ClockRing({ ...props })),
    );
    SPHERE_PROPS.forEach((props) =>
      this._spheres.push(new ClockSphere({ ...props })),
    );

    this.add(...this._rings, ...this._spheres);
  }

  animate(time: number) {
    this.clockwise(time);
  }

  /**
   * clock wise move.
   * @param time time
   */
  clockwise(time: number): void {
    this.rotation.z -= time * this._rotateSpeed;
    this._spheres.forEach((s) => s.animate(time));
  }
}
