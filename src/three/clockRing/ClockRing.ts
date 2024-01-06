import {
  Object3D,
  Mesh,
  RingGeometry,
  MeshBasicMaterial,
  Vector3,
  DoubleSide,
} from "three";

/**
 * WireClock's each ring class
 */
export default class ClockRing extends Object3D {
  private readonly _mesh: Mesh;
  private readonly _geom: RingGeometry;
  private readonly _mat: MeshBasicMaterial;
  private readonly _xSpeed: number;
  private readonly _ySpeed: number;

  constructor({
    innerRadius,
    outerRadius,
    pos,
    xSpeed,
    ySpeed,
  }: ClockRingProps) {
    super();
    this._geom = new RingGeometry(innerRadius, outerRadius, 128);
    this._mat = new MeshBasicMaterial({ color: 0xffffff });
    this._mat.side = DoubleSide;
    this._mesh = new Mesh(this._geom, this._mat);
    this.add(this._mesh);
    this.position.copy(pos);
    this._xSpeed = xSpeed;
    this._ySpeed = ySpeed;
  }

  animate(time: number) {
    this.rotation.x -= time * this._xSpeed;
    this.rotation.y -= time * this._ySpeed;
  }
}

/** Properties of ClockRing class */
export type ClockRingProps = {
  innerRadius: number;
  outerRadius: number;
  pos: Vector3;
  xSpeed: number;
  ySpeed: number;
};
