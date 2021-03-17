<template>
  <div id="title-wrapper" class="is-vh-center">
    <h1 class="title">
      <div class="line">
        <span class="move">l</span>
        <span class="move">o</span>
        <span class="move">o</span>
        <span class="move">k</span>
        <span class="space"></span>
        <span class="move">b</span>
        <span class="move">a</span>
        <span class="move">c</span>
        <span class="move">k</span>
        <span class="space"></span>
        <span class="move">o</span>
        <span class="move">n</span>
        </div>
      <div class="line">
        <span class="move">2</span>
        <span class="move">0</span>
        <span class="move">2</span>
        <span class="move">0</span>
      </div></h1>
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

    const letters = document.getElementsByClassName('move')
    if(letters) {
      for(const i in letters) {
        gsap.to(letters[i], {duration: 1, delay: Number(i) * .16, autoAlpha: 1})
        gsap.to(letters[i], {duration: 1, delay: Number(i) * .16, y: 10})
      }
    }
  }
}
</script>

<style scoped>
#title-wrapper {
  font-size: 2rem;
  letter-spacing: 1.2rem;
}
.line {
  height: 100px;
  display: flex;
  justify-content: center;
}
.space {
  margin-left: 1.6rem;
}
.move {
  opacity: 0;
}
</style>