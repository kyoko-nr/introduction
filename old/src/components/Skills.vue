<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="title-wrapper">
          <h2 class="block-title">{{ title }}</h2>
        </div>
        <div class="score-block-wrapper" v-for="(skillContent, index) in skillContents" :key="index">
          <Skill :skillContent="skillContent" :num="index + 1" :group="title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Skill from './Skill.vue'
import SkillContent from '../libs/skillContent'

@Options({
  components: {
    Skill,
  },
  props: {
    title: String,
    skillContents: Array as () => SkillContent[],
  }
})
export default class Skills extends Vue {}
</script>

<style scoped>
.score-block-wrapper {
  margin-top: 4rem;
}
</style>