<template>
  <div class="wrapper">
    <div :id=id class="canvas"></div>
    <div class="name">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import * as THREE from 'three'
import ExtraObject from '../three/extraObjects'
import Id from '../utils/id'

@Options({
  props: {
    title: String,
  }
})
export default class ExtraAnim extends Vue {
  /**
   * data.
   * initialize members on init() method because
   * members don't work when you initialize members here.
   */
  size = {width: 0, height: 0}
  scene!: THREE.Scene
  renderer!: THREE.WebGLRenderer
  camera!: THREE.PerspectiveCamera
  clock!: THREE.Clock
  prevTime = Date.now()
  prevScroll = 0
  scroll = {
    prev: 0,
    dest: 0
  }
  id = "extra" + Id.generateId()

  /**
   * mounted.
   */
  mounted(): void {
    this.init()
    console.log(this.id)
  }

  /**
   * initialize.
   */
  init(): void {
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    const canvas = document.getElementById(this.id)
    if(canvas) {
      this.size.width = canvas.clientWidth
      this.size.height = canvas.clientHeight
      canvas.appendChild(this.renderer.domElement)
    }

    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 300)
    this.camera.position.set(0, 0, 100)

    const obj = new ExtraObject(4)
    this.scene.add(obj.getMesh())

    this.renderer.render(this.scene, this.camera)
  }

}
</script>

<style scoped>
.wrapper {
  height: 10rem;
}
.canvas {
  height: 100%;
}
</style>