<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="title-wrapper">
          <h2 class="block-title">{{ title }}</h2>
        </div>
        <div class="score-block-wrapper" v-for="(content, index) in contents" :key="index">
          <Score :content="content" :num="index + 1" :group="title"/>
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
.score-block-wrapper {
  margin-top: 4rem;
}
</style>