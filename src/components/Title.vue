<template>
  <div id="title-wrapper" class="is-vh-center">
    <h1 class="title">kyoko kitagawa</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import gsap from 'gsap'

export default class Title extends Vue {
  mounted() {
    const titleWrapper = document.getElementById('title-wrapper')
    if(titleWrapper) {
      titleWrapper.style.height = window.innerHeight + "px"
    }

    const title = document.getElementsByClassName('title')
    gsap.to(title, {duration: 1, delay: 0.5, autoAlpha: 1})
    gsap.to(title, {duration: 1, delay: 0.5, y: 10})
  }
}
</script>

<style scoped>
#title-wrapper {
  font-size: 1.4rem;
  letter-spacing: 1rem;
  height: 100px;
  display: flex;
  justify-content: center;
}
.title {
  opacity: 0;
}
</style>