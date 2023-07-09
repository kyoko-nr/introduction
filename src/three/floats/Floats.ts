import { Group, Color } from "three";
import Shape from "./Shape";
import Cube from "./Cube";
import Octa from "./Octa";
import Cone from "./Cone";
import { generateRandomPos } from "./logic/generateRandomPos";
import { randomBetween } from "@/src/utils/randomBetween";

const CUBE_NUM = 10;
const OCTA_NUM = 10;
const CONE_NUM = 10;
const COLOR = new Color(0xcdfaf2);

/**
 * Floating shapes
 */
export default class Floats extends Group {
  private readonly _shapes: Shape[] = [];

  constructor() {
    super();

    // Cubes
    for (let i = 0; i < CUBE_NUM; i++) {
      const cube = new Cube(
        randomBetween(1, 3),
        COLOR,
        generateRandomPos(),
        randomBetween(3, 10),
      );
      this._shapes.push(cube);
    }

    // Octahedrons
    for (let i = 0; i < OCTA_NUM; i++) {
      const octa = new Octa(
        randomBetween(1, 2.5),
        COLOR,
        generateRandomPos(),
        randomBetween(3, 10),
      );
      this._shapes.push(octa);
    }

    // Cones
    for (let i = 0; i < CONE_NUM; i++) {
      const cone = new Cone(
        randomBetween(1, 3),
        COLOR,
        generateRandomPos(),
        randomBetween(3, 10),
      );
      this._shapes.push(cone);
    }

    this.add(...this._shapes);
  }

  /**
   * animate shapes.
   */
  animate(time: number, scale: number) {
    this._shapes.forEach((s) => s.animate(time, scale));
  }

  /**
   * set move to reverse.
   */
  toReverse() {
    this._shapes.forEach((s) => s.setReverseFlg());
  }

  /**
   * set move to forward.
   */
  toForward() {
    this._shapes.forEach((s) => s.setForwardFlg());
  }

  /**
   * Returns if it's moving forward.
   * @returns boolean
   */
  isForward(): boolean {
    return this._shapes.at(0)?.isForward() ?? false;
  }
}
