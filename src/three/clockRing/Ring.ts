import * as THREE from "three";

export default class Ring extends THREE.Object3D {
  private readonly _mesh: THREE.Mesh;
  private readonly _geom: THREE.RingGeometry;
  private readonly _mat: THREE.MeshBasicMaterial;

  constructor(innerRadius: number, outerRadius: number, pos: THREE.Vector3) {
    super();
    this._geom = new THREE.RingGeometry(innerRadius, outerRadius, 128);
    this._mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this._mesh = new THREE.Mesh(this._geom, this._mat);
    this.add(this._mesh);
    this.position.add(pos);
  }
}
