import * as THREE from "three";

export default class Sphere extends THREE.Object3D {
  private readonly _mesh: THREE.Mesh;
  private readonly _geom: THREE.SphereGeometry;
  private readonly _mat: THREE.MeshBasicMaterial;

  constructor(
    radius: number,
    widthSeg: number,
    heightSeg: number,
    pos: THREE.Vector3,
  ) {
    super();
    this._geom = new THREE.SphereGeometry(radius, widthSeg, heightSeg);
    this._mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    this._mesh = new THREE.Mesh(this._geom, this._mat);
    this.add(this._mesh);
    this.position.copy(pos);
  }
}
