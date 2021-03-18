<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="title-wrapper">
          <h2 class="block-title">extra</h2>
        </div>
        <div class="columns">
          <div class="column is-4"><ExtraAnim :title="titles[0]" /></div>
          <div class="column is-4"><ExtraAnim :title="titles[1]" /></div>
          <div class="column is-4"><ExtraAnim :title="titles[2]" /></div>
        </div>
        <div class="columns">
          <div class="column is-4"><ExtraAnim :title="titles[3]" /></div>
          <div class="column is-4"><ExtraAnim :title="titles[4]" /></div>
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
import { Options, Vue } from 'vue-class-component'
import ExtraAnim from './ExtraAnim.vue'

@Options({
  components: {
    ExtraAnim,
  }
})
export default class Extra extends Vue {
  /**
   * data.
   */
  titles = ["WebGL", "Three.js", "数学", "Vue.js", "Typescript"]
}
</script>