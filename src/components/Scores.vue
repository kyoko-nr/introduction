<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="title-wrapper">
          <h2 class="title">{{ title }}</h2>
        </div>
        <div class="score-block-wrapper" v-for="(content, index) in contents" :key="index">
          <Score :content="content" :num="index + 1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Score from './Score.vue'
import Content from './content'

@Options({
  components: {
    Score,
  },
  props: {
    title: String,
    contents: Array as () => Content[],
  }
})
export default class Scores extends Vue {}
</script>

<style scoped>
.card {
  margin: 6rem 4rem;
  padding: 8rem 4rem;
  background: rgba(255, 255, 255, 0.3);
}
.title-wrapper {
  position: relative;
  padding-bottom: 2rem;
}
.title {
  font-size: 2.0rem;
  letter-spacing: .8rem;
}
.title::after {
  content: '';
  display: block;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  height: 1px;
  width: 40rem;
}
.score-block-wrapper {
  margin-top: 6rem;
}
</style>