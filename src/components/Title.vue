<template>
  <div id="title" class="is-vh-center"></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Title extends Vue {

  mounted(): void {
    // const elem = document.querySelector('div#title')
    // elem?.setAttribute('height', window.innerHeight + 'px')
    // // elem.style.height = window.innerHeight + 'px'
  }
}
</script>

<style scoped>
#title {
  height: 800px;
}
</style>