<template>
  <footer>
    <p class="thank-you">thank you</p>
    <p>this page is using</p>
    <ul class="technorogy">
      <li>Three.js</li>
      <li>Vue.js</li>
      <li>Typescript</li>
      <li>Bulma</li>
    </ul>
    <p>&copy;Kyoko Kitagawa</p>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Footer extends Vue {}
</script>

<style scoped>
footer {
  text-align: center;
  width: 100%;
  font-size: 1rem;
  padding: 4rem;
}
.thank-you {
  font-size: 1.8rem;
  letter-spacing: .8rem;
}
.technorogy {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>