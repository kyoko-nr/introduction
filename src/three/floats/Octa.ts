import * as THREE from "three";
import Shape from "./Shape";

export default class Octa extends Shape {
  private readonly _geom: THREE.OctahedronGeometry;
  private readonly _mat: THREE.MeshBasicMaterial;
  readonly _speed: number;

  /**
   * Constructor.
   * @param radius radius
   * @param color color
   * @param position first position
   * @param speed moving speed
   */
  constructor(
    radius: number,
    color: THREE.Color,
    position: THREE.Vector3,
    speed: number,
  ) {
    super();
    this._geom = new THREE.OctahedronGeometry(radius);
    this._mat = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    this.geometry = this._geom;
    this.material = this._mat;
    this.position.copy(position);
    this._speed = speed;
  }
}
