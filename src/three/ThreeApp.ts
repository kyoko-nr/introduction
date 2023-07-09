import * as THREE from "three";
import WireClock from "./clockRing/WireClock";
import Floats from "./floats/Floats";

export default class ThreeApp {
  private _size = { w: 0, h: 0 };
  private readonly _scene: THREE.Scene;
  private readonly _renderer: THREE.WebGLRenderer;
  private readonly _camera: THREE.PerspectiveCamera;
  private readonly _clockRing: WireClock;
  // private readonly _floats: Floats;
  private readonly _clock = new THREE.Clock();

  constructor() {
    this._size.w = window.innerWidth;
    this._size.h = window.innerHeight;

    this._scene = new THREE.Scene();
    this._scene.fog = new THREE.Fog(0xe5b6b7, 50, 200);

    this._renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this._renderer.setSize(this._size.w, this._size.h);
    this._renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this._camera = new THREE.PerspectiveCamera(
      45,
      this._size.w / this._size.h,
      0.1,
      300,
    );
    this._camera.position.set(0, 0, 100);

    this._clockRing = new WireClock();
    // this._floats = new Floats();

    this._scene.add(this._clockRing);

    this._renderer.setAnimationLoop(() => {
      this._renderer.render(this._scene, this._camera);
      this._clockRing.animate(this._clock.getDelta());
    });
  }

  getDom() {
    return this._renderer.domElement;
  }
}
