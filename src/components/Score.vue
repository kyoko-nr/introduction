<template>
  <div class="columns" v-bind:class='{left:content.left, right:content.right}'>
    <div class="column is-3">
      <span class="score">{{ content.score }}</span>
    </div>
    <div class="column is-9">
      <div class="score-content is-v-center">
        <div>
          <div class="score-title">
            <span class="title-number">{{ ('00' + num).slice(-2) }}</span>
            <span>{{ content.title }}</span>
          </div>
          <p class="detail">{{ content.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Content from './content'

@Options({
  props: {
    content: Content,
    num: Number,
  }
})
export default class Score extends Vue {
  content!: Content
  num!: number
}
</script>

<style scoped>
.left {
  padding-left: 6rem;
}
.right {
  padding-right: 6rem;
}
.score {
  font-size: 4rem;
  font-family: 'Abril Fatface', cursive;
}
.score-content {
  text-align: left;
  height: 100%;
}
.score-title {
  display: flex;
  letter-spacing: .1rem;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2.4rem;
}
.title-number {
  margin-right: 1rem;
}
.title-number::before {
  content: '−';
}
.detail {
  margin-top: 1rem;
  font-size: 1rem;
}
</style>