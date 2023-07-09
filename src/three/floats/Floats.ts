import * as THREE from "three";
import Shape from "./Shape";
import Cube from "./Cube";
import Octa from "./Octa";
import Cone from "./Cone";
import { generateRandomPos } from "./utils/generateRandomPos";
import { generateRandomSpeed } from "./utils/generateRandomSpeed";

const CUBE_NUM = 10;
const OCTA_NUM = 10;
const CONE_NUM = 10;
const COLOR = new THREE.Color(0xcdfaf2);

export default class Floats extends THREE.Group {
  private readonly _shapes: Shape[] = [];

  constructor() {
    super();

    // Cubes
    for (let i = 0; i < CUBE_NUM; i++) {
      const cube = new Cube(
        Math.random() * 2 + 1,
        COLOR,
        generateRandomPos(),
        generateRandomSpeed(),
      );
      this._shapes.push(cube);
    }

    // Octahedrons
    for (let i = 0; i < OCTA_NUM; i++) {
      const octa = new Octa(
        Math.random() * 2.5 + 1,
        COLOR,
        generateRandomPos(),
        generateRandomSpeed(),
      );
      this._shapes.push(octa);
    }

    // Cones
    for (let i = 0; i < CONE_NUM; i++) {
      const cone = new Cone(
        Math.random() * 2 + 1,
        COLOR,
        generateRandomPos(),
        generateRandomSpeed(),
      );
      this._shapes.push(cone);
    }

    this.add(...this._shapes);
  }

  /**
   * animate shapes.
   */
  animate(time: number, scale: number): void {
    for (const shape of this._shapes) {
      shape.animate(time, scale);
    }
  }

  /**
   * set move to reverse.
   */
  toReverse(): void {
    for (const shape of this._shapes) {
      shape.setReverseFlg();
    }
  }

  /**
   * set move to forward.
   */
  toForward(): void {
    for (const shape of this._shapes) {
      shape.setForwardFlg();
    }
  }

  /**
   * Returns if it's moving forward.
   * @returns boolean
   */
  isForward(): boolean {
    return this._shapes.at(0)?.isForward() ?? false;
  }
}
