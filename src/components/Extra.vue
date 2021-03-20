<template>
  <div :id=wrapId class="wrapper">
    <div :id=divId class="canvas"></div>
    <div :id=nameId class="name">{{ content.title }}</div>
  </div>
  <p :id=detailId>{{ content.detail }}</p>
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
import PairColor from '../utils/pairColor'
import ScaleManager from '../utils/scaleManager'
import Content from '../dto/content'

@Options({
  props: {
    content: Content,
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
  idx = this.id - ((this.id / 5 | 0) * 5)
  divId = "extra" + this.id
  wrapId = "wrapper" + this.id
  nameId = "name" + this.id
  detailId = "detail" + this.id
  object!: Shape
  requestAnim = 0
  animationOnGoing = false
  scaleManager = new ScaleManager()

  /**
   * mounted.
   */
  mounted(): void {
    this.init()
    const wrapper = document.getElementById(this.wrapId)
    if(wrapper) {
      wrapper.addEventListener('mouseenter', this.mouseEnter)
      wrapper.addEventListener('mouseleave', this.mouseLeave)
    }
    const name = document.getElementById(this.nameId)
    if(name) {
      name.style.color = PairColor.getDarkStr(this.idx)
    }
    const detail = document.getElementById(this.detailId)
    if(detail) {
      detail.style.color = PairColor.getDarkStr(this.idx)
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

    this.draw()
  }

  /**
   * Mouse enter event.
   */
  mouseEnter(): void {
    this.scaleManager.setDestination(.1)
    this.animationOnGoing = true
    this.draw()
  }

  /**
   * Mouse leave event.
   */
  mouseLeave(): void {
    this.scaleManager.setDestination(0)
    this.animationOnGoing = false
  }

  /**
   * draw.
   */
  draw(): void {
    this.renderer.render(this.scene, this.camera)

    if(this.animationOnGoing) {
      this.scaleManager.increaseScale(0.1)
    } else {
      this.scaleManager.decreaseScale(0.1)
    }

    // Cancel animation
    if(this.scaleManager.getCurrent() < 0) {
      cancelAnimationFrame(this.requestAnim)
    }

    // Animate
    if(this.scaleManager.getCurrent() > 0) {
    this.object.rotate(this.scaleManager.getCurrent())
    this.requestAnim = requestAnimationFrame(this.draw)
    }

  }

  /**
   * get object.
   */
  private getObject(): Shape {
    const position = new THREE.Vector3(0, 0, 10)
    const color = PairColor.getLightThree(this.idx)
    switch(this.idx) {
      case 0:
        return new Sphere(24, color, position, 0)
      case 1:
        return new Cube(34, color, position, 0)
      case 2:
        return new Cone(28, color, position, 0)
      case 3:
        return new Octa(30, color, position, 0)
      case 4:
        return new Icosa(30, color, position, 0)
      default:
        return new Sphere(24, color, position, 0)
    }
  }

}
</script>

<style scoped>
.wrapper {
  height: 12rem;
  display: flex;
  position: relative;
}
.canvas {
  height: 100%;
  width: 100%;
  margin: 0;
}
.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
</style>