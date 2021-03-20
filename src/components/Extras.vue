<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="title-wrapper">
          <h2 class="block-title">extra</h2>
        </div>
        <div class="columns extra-wrapper">
          <div class="column is-4"><Extra :content="contents[0]" /></div>
          <div class="column is-4"><Extra :content="contents[1]" /></div>
          <div class="column is-4"><Extra :content="contents[2]" /></div>
        </div>
        <div class="columns extra-wrapper">
          <div class="column is-4"><Extra :content="contents[3]" /></div>
          <div class="column is-4"><Extra :content="contents[4]" /></div>
          <div class="column is-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Extra from './Extra.vue'
import Content from '../dto/content'

@Options({
  components: {
    Extra,
  }
})
export default class Extras extends Vue {
  /**
   * data.
   */
  contents = [
    new Content("Three.js",   "Web上での3D表現に興味があったため、手軽に3Dコンテンツを制作できるThree.jsというライブラリを学んでいます。このサイトもThree.jsを使用しています。"),
    new Content("WebGL",      "Three.jsの元となっているWebGLも合わせて勉強しています。"),
    new Content("数学",        "3Dシミュレーションを行うにあたり数学の知識が必要となるため、高校生ぶりに数学も勉強しました。"),
    new Content("Vue.js",     "フロントエンドの技術も引き続き学んでいます。"),
    new Content("Typescript", "Three.jsやVue.jsを勉強している際に型がないのが不便だなぁと感じたため、Typescriptを使用して作業効率を上げるようにしています。"),
  ]
}
</script>

<style scoped>
.extra-wrapper {
  margin-top: 2rem;
}
</style>