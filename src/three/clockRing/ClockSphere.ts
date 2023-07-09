import {
  Object3D,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  Vector3,
} from "three";

/**
 * ClockRing's each sphere class
 */
export default class ClockSphere extends Object3D {
  private readonly _mesh: Mesh;
  private readonly _geom: SphereGeometry;
  private readonly _mat: MeshBasicMaterial;
  private readonly _speed: number;

  constructor({ radius, widthSeg, heightSeg, pos, speed }: ClockSphereProps) {
    super();
    this._geom = new SphereGeometry(radius, widthSeg, heightSeg);
    this._mat = new MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    this._mesh = new Mesh(this._geom, this._mat);
    this.add(this._mesh);
    this.position.copy(pos);
    this._speed = speed;
  }

  animate(time: number) {
    this.rotation.x -= time * this._speed;
    this.rotation.y -= time * this._speed * 1.5;
  }
}

/** Properties of Spere class */
export type ClockSphereProps = {
  radius: number;
  widthSeg: number;
  heightSeg: number;
  pos: Vector3;
  speed: number;
};
