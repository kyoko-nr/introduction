<template>
  <div class="background"></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import * as THREE from 'three'
import ClockRing from '../three/clockRing'
import BackShapes from '../three/backShapes'

export default class BackGround extends Vue {
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
  clockRing!: ClockRing
  backShapes!: BackShapes
  prevTime = Date.now()
  prevScroll = 0
  moveScale!: number

  /**
   * mounted.
   */
  mounted(): void {
    this.init()
    this.draw()
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
  }

  /**
   * initialize members.
   */
  init(): void {
    this.size.width = window.innerWidth
    this.size.height = window.innerHeight

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.Fog(0xE5B6B7, 50, 200)

    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    const background = document.querySelector('div.background')
    background?.appendChild(this.renderer.domElement)
    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 300)
    this.camera.position.set(0, 0, 100)

    this.clockRing = new ClockRing()
    this.scene.add(this.clockRing.getMesh())

    this.backShapes = new BackShapes()
    this.scene.add(this.backShapes.getMesh())

    this.clock = new THREE.Clock()
  }

  /**
   * render.
   */
  draw(): void {
    this.renderer.render(this.scene, this.camera)

    // clock ring animation.
    const time = this.getTime()
    this.clockRing.animate(time, this.moveScale)

    // back shapes animation.
    this.backShapes.animate(time, this.moveScale)

    window.requestAnimationFrame(this.draw)
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

  /**
   * constroll animation on scroll.
   */
  onScroll(): void {
    // calculate scroll amount
    this.moveScale = Math.abs(window.scrollY - this.prevScroll)
    this.prevScroll = window.scrollY
    console.log("scrollY: " + window.scrollY)
    console.log("prevSc: " + this.prevScroll)
    console.log("moveScale: " + this.moveScale)
    // this.moveScale = this.getScale(0.8)

    if(window.scrollY < 300) {
      if(this.backShapes.isReverse()){
        this.backShapes.toForward()
        this.clockRing.toForward()
      }
    } else {
      if(this.backShapes.isForward()) {
        this.backShapes.toReverse()
        this.clockRing.toReverse()
      }
    }
  }

  /**
   * get second.
   * @returns sec
   */
  private getTime(): number {
    const currentTime = Date.now()
    const deltaTime = (currentTime - this.prevTime) / 1000
    this.prevTime = currentTime
    return deltaTime
  }

  /**
   * get move scale with easing.
   * reflects scroll amount.
   * @param ease easing rate.
   */
  private getScale(ease: number): number {
    console.log("scrollY: " + window.scrollY)
    console.log("prev: " + this.prevScroll)
    console.log("remain: " + Math.abs(window.scrollY - this.prevScroll))
    const remain = Math.abs(window.scrollY - this.prevScroll)
    const result = remain * ease
    this.prevScroll = remain
    return result
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