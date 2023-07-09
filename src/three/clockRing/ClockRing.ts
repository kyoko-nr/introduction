import {
  Object3D,
  Mesh,
  RingGeometry,
  MeshBasicMaterial,
  Vector3,
} from "three";

/**
 * WireClock's each ring class
 */
export default class ClockRing extends Object3D {
  private readonly _mesh: Mesh;
  private readonly _geom: RingGeometry;
  private readonly _mat: MeshBasicMaterial;

  constructor({ innerRadius, outerRadius, pos }: ClockRingProps) {
    super();
    this._geom = new RingGeometry(innerRadius, outerRadius, 128);
    this._mat = new MeshBasicMaterial({ color: 0xffffff });
    this._mesh = new Mesh(this._geom, this._mat);
    this.add(this._mesh);
    this.position.copy(pos);
  }
}

/** Properties of ClockRing class */
export type ClockRingProps = {
  innerRadius: number;
  outerRadius: number;
  pos: Vector3;
};
