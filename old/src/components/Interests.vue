<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="title-wrapper">
          <h2 class="block-title">interests</h2>
        </div>
        <div class="columns extra-wrapper">
          <div class="column is-4"><Interest :content="contents[0]" /></div>
          <div class="column is-4"><Interest :content="contents[1]" /></div>
          <div class="column is-4"><Interest :content="contents[2]" /></div>
        </div>
        <div class="columns extra-wrapper">
          <div class="column is-4"><Interest :content="contents[3]" /></div>
          <div class="column is-4"></div>
          <div class="column is-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Interest from './Interest.vue'
import Content from '../libs/content'

@Options({
  components: {
    Interest,
  }
})
export default class Interests extends Vue {
  /**
   * data.
   */
  contents = [
    new Content("Vue.js", "フロントエンドではVue.jsに関心があります。コンポーネント単位で部品を区切ることでスコープの管理がしやすいところが扱いやすくて好きです。"),
    new Content("TypeScript", "バックエンドでJavaを主に使用しているため、JavaScriptに型付ができるTypeScriptは馴染みやすい言語です。"),
    new Content("Three.js", "Web上での3D表現に興味があったため、手軽に3Dコンテンツを制作できるThree.jsというライブラリを学んでいます。このサイトもThree.jsを使用しています。"),
    new Content("WebGL", "Three.jsの元となっているWebGLも合わせて学んでおり、さらに多様な表現ができるように試行錯誤しています。"),
  ]
}
</script>

<style scoped>
.extra-wrapper {
  margin-top: 2rem;
}
</style>