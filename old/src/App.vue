<template>
  <div id="app">
    <BackGround/>
    <div id="content" class="content">
      <Title/>
      <Skills title="skills" :skillContents="skillContents" />
      <Interests />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BackGround from './components/BackGround.vue';
import Title from './components/Title.vue'
import Skills from './components/Skills.vue'
import Interests from './components/Interests.vue'
import Footer from './components/Footer.vue'
import SkillContent from './libs/skillContent'

@Options({
  components: {
    BackGround,
    Title,
    Skills,
    Interests,
    Footer
  },
})
export default class App extends Vue {
  /**
   * data.
   */
  skillContents = [
    new SkillContent("1", "JavaScript/jQuery/HTML/CSS (開発経験:約2年)", "現在在籍してるプロジェクトでは、フロントエンドは主にこれらの言語を使用しています。", true),
    new SkillContent("2", "Vue.js/Nuxt.js (開発経験:約1年)", "以前在籍していたプロジェクトではVue.js、Nuxt.jsを使用していました。", false),
    new SkillContent("3", "Java/SpringBoot (開発経験:約3年)", "サーバーサイドでは、SpringBootフレームワークを使用したJavaでの開発を行なっています。", true),
    new SkillContent("4", "TypeScript/Python", "新しいスキルを身につけるため、社内の有志によるTypeScriptやPythonでのアプリ開発も行なっています。", false),
  ]
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cantata+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
* {
  margin: 0;
  padding: 0;
}
html {
  /* font-size: 62.5%; */
  font-size: 100%; /* デプロイするときはこっち */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content {
  position: absolute;
  width: 100%;
}
.title {
  font-family: 'Cantata One', serif;
  text-transform: uppercase;
}
.is-h-center {
  display: flex;
  justify-content: center;
}
.is-v-center {
  display: flex;
  align-items: center;
}
.is-vh-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  letter-spacing: .1rem;
  line-height: 1.6rem;
  margin-top: 1rem;
  font-size: 0.8rem;
}
.content .card {
  margin: 4rem 4rem;
  padding: 6rem 4rem;
  background: rgba(255, 255, 255, 0.5);
}
.title-wrapper {
  position: relative;
  padding-bottom: 2rem;
}
.block-title {
  font-size: 1.8rem;
  letter-spacing: .8rem;
}
.block-title::after {
  content: '';
  display: block;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  height: 1px;
  width: 30rem;
}
</style>
