import * as THREE from "three";
import Shape from "./Shape";

export default class Cone extends Shape {
  private readonly _mesh: THREE.Mesh;
  private readonly _geom: THREE.ConeGeometry;
  private readonly _mat: THREE.MeshBasicMaterial;
  readonly _speed: number;

  /**
   * Constructor
   * @param size size
   * @param color color
   * @param position first position
   * @param speed moving speed
   */
  constructor(
    size: number,
    color: THREE.Color,
    position: THREE.Vector3,
    speed: number,
  ) {
    super();
    this._geom = new THREE.ConeGeometry(size, size * 1.5, 6);
    this._mat = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    this._mesh = new THREE.Mesh(this._geom, this._mat);
    this.add(this._mesh);
    this.position.copy(position);
    this._speed = speed;
  }

  /**
   * rotate shape
   * @param time second
   */
  public rotate(time: number) {
    this.rotation.y += time * this._speed;
    this.rotation.z += time * this._speed;
  }
}
