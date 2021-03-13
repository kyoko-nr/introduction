<template>
  <div class="background"></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import * as THREE from 'three'
import Cube from '../three/cube'

export default class BackGround extends Vue {
  /**
   * data.
   * initialize members on init() method because
   * members don't work when you initialize members here.
   */
  size = {width: 0, height: 0}
  scene!: THREE.Object3D
  renderer!: THREE.WebGLRenderer
  camera!: THREE.PerspectiveCamera
  group!: THREE.Object3D
  cube!: Cube
  clock!: THREE.Clock

  /**
   * mounted.
   */
  mounted(): void {
    this.init()
    this.animate()
    window.addEventListener('resize', this.onResize)
  }

  /**
   * initialize members.
   */
  init(): void {
    this.size.width = window.innerWidth
    this.size.height = window.innerHeight

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    const background = document.querySelector('div.background')
    background?.appendChild(this.renderer.domElement)
    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    this.camera.position.set(0, 0, 100)

    this.cube = new Cube()
    this.cube.setPosition(28, 11.8, 4)

    this.group = new THREE.Group()
    this.group.add(this.cube.getMesh())

    this.scene.add(this.group)

    this.clock = new THREE.Clock()
  }

  /**
   * animate.
   */
  animate(): void {
    this.renderer.render(this.scene, this.camera)
    const elapsedTime = this.clock.getElapsedTime()
    this.group.rotation.z = -elapsedTime/3
    this.cube.setRotation(-elapsedTime * 1.8, -elapsedTime * 2, 0)
    window.requestAnimationFrame(this.animate)
  }

  /**
   * on window resize.
   */
  onResize(): void {
    this.size.width = window.innerWidth
    this.size.height = window.innerHeight
    this.camera.aspect = this.size.width / this.size.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
}
</script>

<style scoped>
.background {
  background: linear-gradient(115.58deg, #00FC19 0%, #1700A4 100.22%),
              radial-gradient(92.72% 100% at 50% 0%, #EBFFCB 0%, #651200 100%),
              radial-gradient(92.72% 100% at 50% 0%, #2bff00 0%, #820000 100%),
              radial-gradient(109.21% 213.32% at 100% 0%, #FF4D00 0%, #00C2FF 100%),
              linear-gradient(127.43deg, #D50000 0%, #6CBAD8 100%);
  background-blend-mode: lighten, overlay, lighten, screen, normal;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>