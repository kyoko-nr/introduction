<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="title-wrapper">
          <h2 class="block-title">extra</h2>
        </div>
        <div class="columns">
          <div class="column is-4">WebGL</div>
          <div class="column is-4">Three.js</div>
          <div class="column is-4">数学</div>
        </div>
        <div class="columns">
          <div class="column is-4">Vue.js</div>
          <div class="column is-4">Typescript</div>
          <div class="column is-4"></div>
        </div>
        <div>
          <p>WEB上での3D表現に興味があったため、プライベートの時間を使ってそれらに関する勉強をしていました。</p>
          <p>JavascriptベースのライブラリであるThree.jsを中心に、物理シミュレーションを行うために欠かせない数学や、WEB上での3D表現の元となっているWebGLも含め幅広く学んでいます。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Extra extends Vue {}
</script>