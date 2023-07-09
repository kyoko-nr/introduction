import * as THREE from "three";
import Ring from "./Ring";
import Sphere from "./Sphere";

export default class ClockRing extends THREE.Group {
  private readonly _rings: THREE.Object3D[] = [];
  private readonly _spheres: THREE.Object3D[] = [];

  constructor() {
    super();

    this._rings.push(new Ring(31.9, 32, new THREE.Vector3(-0.3, 1.4, 2)));
    this._rings.push(new Ring(30.9, 31, new THREE.Vector3(1, 0, 2)));
    this._rings.push(new Ring(29.9, 30, new THREE.Vector3(0.7, 4.6, 2)));

    this._spheres.push(new Sphere(3, 8, 8, new THREE.Vector3(28.8, 11.5, 5)));
    this._spheres.push(new Sphere(1.6, 6, 6, new THREE.Vector3(-28.2, 6.6, 5)));
    this._spheres.push(
      new Sphere(1.4, 6, 6, new THREE.Vector3(-8.4, -28.5, 5)),
    );

    this.add(...this._rings, ...this._spheres);
  }
}
