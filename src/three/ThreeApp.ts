import { Scene, WebGLRenderer, Vector3, Clock, Fog } from "three";
import WireClock from "./clockRing/WireClock";
import Floats from "./floats/Floats";
import ThreeCamera from "./ThreeCamera";

export default class ThreeApp {
  private _size = { w: 0, h: 0 };
  private readonly _scene: Scene;
  private readonly _renderer: WebGLRenderer;
  private readonly _camera: ThreeCamera;
  private readonly _clockRing: WireClock;
  private readonly _floats: Floats;
  private readonly _clock = new Clock();

  constructor() {
    this._size.w = window.innerWidth;
    this._size.h = window.innerHeight;

    this._scene = new Scene();
    this._scene.fog = new Fog(0xe5b6b7, 50, 200);

    this._renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this._renderer.setSize(this._size.w, this._size.h);
    this._renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this._camera = new ThreeCamera(
      this._size.w / this._size.h,
      new Vector3(0, 0, 100),
    );

    this._clockRing = new WireClock();
    this._floats = new Floats();

    this._scene.add(this._clockRing, this._floats);

    this._renderer.setAnimationLoop(() => {
      this._renderer.render(this._scene, this._camera);
      const delta = this._clock.getDelta();
      const elapsed = this._clock.getElapsedTime();
      this._clockRing.animate(delta);
      this._floats.animate(delta, 0);
      this._camera.animate(elapsed);
    });
  }

  getDom() {
    return this._renderer.domElement;
  }
}
