import * as THREE from "three";
import Shape from "./Shape";

export default class Cube extends Shape {
  private readonly _mesh: THREE.Mesh;
  private readonly _geom: THREE.SphereGeometry;
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
    this._geom = new THREE.SphereGeometry(radius, 6, 6);
    this._mat = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    this._mesh = new THREE.Mesh(this._geom, this._mat);
    this.add(this._mesh);
    this.position.copy(position);
    this._speed = speed;
  }
}
