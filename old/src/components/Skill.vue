<template>
  <div class="columns" :id='id' :class='{left:skillContent.left, right:skillContent.right}'>
    <div class="column is-2">
      <span class="score">{{ skillContent.num }}</span>
    </div>
    <div class="column is-10">
      <div class="score-content is-v-center">
        <div>
          <div class="score-title">
            <span>{{ skillContent.title }}</span>
          </div>
          <p class="detail">{{ skillContent.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SkillContent from '../libs/skillContent'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

@Options({
  props: {
    skillContent: SkillContent,
    num: Number,
    group: String
  }
})
export default class Skill extends Vue {
  skillContent!: SkillContent
  num!: number
  group!: string
  id = this.group.replace(/\s+/g, '') + this.num

  /**
   * mouted.
   */
  mounted(): void {
    gsap.registerPlugin(ScrollTrigger)

    const obj = document.getElementById(this.id)
    if(obj) {
      // animation when object is in view
      gsap.to(obj, {duration: 1, autoAlpha: 1,
        scrollTrigger: {
          trigger: obj,
          start: 'top 80%',
        }
      })
      gsap.to(obj, {duration: 1, x: 10,
        scrollTrigger: {
          trigger: obj,
          start: 'top 80%',
        }
      })
    }
  }

}
</script>

<style scoped>
.columns {
  opacity: 0;
}
.left {
  margin-left: 9rem;
}
.right {
  margin-right: 9rem;
}
.score {
  font-size: 6rem;
  font-family: 'Abril Fatface', cursive;
}
.score-content {
  text-align: left;
  height: 100%;
}
.score-title {
  display: flex;
  letter-spacing: .1rem;
  font-size: 1.0rem;
  font-weight: bold;
  line-height: 2.0rem;
}
.title-number {
  margin-right: 1rem;
}
.title-number::before {
  content: '−';
}
.detail {
  margin-top: 1rem;
}
</style>