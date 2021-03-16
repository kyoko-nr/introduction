<template>
  <div id="title-wrapper" class="is-vh-center">
    <h1 class="title">look back on<br>2020</h1>
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

    const title = document.querySelector('h1.title')
    if(title) {
      gsap.to(title, { duration: 1, delay: .5, y: 10})
      gsap.to(title, { duration: 2, delay: .5,  autoAlpha: 1})
    }
  }
}
</script>

<style scoped>
#title-wrapper {
  font-size: 2rem;
  letter-spacing: 1.2rem;
}
.title {
  opacity: 0;

}
</style>