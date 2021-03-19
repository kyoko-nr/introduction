<template>
  <div class="wrapper">
    <div :id=divId class="canvas"></div>
    <div class="name">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import * as THREE from 'three'
import Shape from '../three/shape'
import Sphere from '../three/sphere'
import Cube from '../three/cube'
import Cone from '../three/cone'
import Octa from '../three/octa'
import Icosa from '../three/icosa'
import IdGenerator from '../utils/idGenerator'

@Options({
  props: {
    title: String,
  }
})
export default class Extra extends Vue {
  /**
   * data.
   * initialize members on init() method because
   * members don't work when you initialize members here.
   */
  size = {width: 0, height: 0}
  scene!: THREE.Scene
  renderer!: THREE.WebGLRenderer
  camera!: THREE.PerspectiveCamera
  id = IdGenerator.generate()
  divId = "extra" + this.id
  object!: Shape
  requestAnim = 0
  scale = 0
  animationOnGoing = false

  /**
   * mounted.
   */
  mounted(): void {
    this.init()
    const canvas = document.getElementById(this.divId)
    if(canvas) {
      canvas.addEventListener('mouseenter', this.mouseEnter)
      canvas.addEventListener('mouseleave', this.mouseLeave)
    }
  }

  /**
   * initialize.
   */
  init(): void {
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    const canvas = document.getElementById(this.divId)
    if(canvas) {
      this.size.width = canvas.clientWidth
      this.size.height = canvas.clientHeight
      canvas.appendChild(this.renderer.domElement)
    }

    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.camera = new THREE.PerspectiveCamera(45, this.size.width / this.size.height, 0.1, 300)
    this.camera.position.set(0, 0, 100)

    this.object = this.getObject()
    this.scene.add(this.object.getMesh())

    // this.renderer.render(this.scene, this.camera)
    this.draw()

  }

  /**
   * Mouse enter event.
   */
  mouseEnter(): void {
    this.animationOnGoing = true
    this.draw()
  }

  /**
   * Mouse leave event.
   */
  mouseLeave(): void {
    this.animationOnGoing = false
  }

  /**
   * draw.
   */
  draw(): void {
    this.renderer.render(this.scene, this.camera)

    // let test = 0

    // scaleの値を増減させる
    if(this.animationOnGoing) {
      if(this.scale < .05) {
        this.scale += .0005
        // test = this.getScale()
      }
    } else {
      if(this.scale > 0) {
        this.scale -= .005
      }
    }

    // scale が0になったらanimationframeをcancelする
    if(this.scale < 0) {
      this.scale = 0
      cancelAnimationFrame(this.requestAnim)
    }

    // objectを回転させる
    if(this.scale > 0) {
      this.object.rotate(this.scale)
      this.requestAnim = requestAnimationFrame(this.draw)
    }
  }

  // private getScale() {
  //   this.scale += .0005
  //   const result = (0.5 - this.scale) * 0.4
  //   this.scale = result
  //   return result
  // }

  /**
   * get object.
   */
  private getObject(): Shape {
    const idx = this.id - ((this.id / 5 | 0) * 5)
    const position = new THREE.Vector3(0, 0, 10)
    switch(idx) {
      case 0:
        return new Sphere(24, new THREE.Color(0xFDAF89), position, .2)
      case 1:
        return new Cube(34, new THREE.Color(0xABCEFD), position, .2)
      case 2:
        return new Cone(28, new THREE.Color(0xADA6B3), position, .2)
      case 3:
        return new Octa(30, new THREE.Color(0xE3FBE2), position, .2)
      case 4:
        return new Icosa(30, new THREE.Color(0xEDE2C4), position, .2)
      default:
        return new Sphere(24, new THREE.Color(0xFDAF89), position, .2)
    }
  }

}
</script>

<style scoped>
.wrapper {
  height: 12rem;
}
.canvas {
  height: 100%;
}
</style>