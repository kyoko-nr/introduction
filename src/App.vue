<template>
  <div id="app">
    <BackGround/>
    <div id="content" class="content">
      <Title/>
      <Scores title="my goals" :contents="mygoals" />
      <Scores title="assessments" :contents="assessments"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BackGround from './components/BackGround.vue';
import Title from './components/Title.vue'
import Scores from './components/Scores.vue'
import Content from './components/content'

@Options({
  components: {
    BackGround,
    Title,
    Scores
  },
})
export default class App extends Vue {
  /**
   * data.
   */
  mygoals = [
    new Content("+4", "毎日英語の勉強をする", "ほぼ毎日勉強しました。", true),
    new Content("+5", "TOEICを受験する。900点以上を取得する", "12月に受験し、955点取得しました！文句なし。", false),
    new Content("+2", "英語を話す機会を作る", "たまに英語で独り言を言っています。", true),
    new Content("0", "IT業界の情報を収集する", "業界全体というよりは、Typescriptやthree.jsなどのライブラリ、フレームワークの情報を収集していました。", false),
    new Content("+4", "Java以外のプログラミング言語に触れてみる", "主にPython、Javascript（ライブラリ含む）の勉強をしました。", true),
    new Content("+2", "効率的で修正が容易なコードを書くことを心がける", "他の人（主に小川さん）が書いたコードを参考に、コードの書き方をアップデートするように心がけています。", false),
  ]
  assessments = [
    new Content("+3", "チームワークを重視しチームとしての利益を優先している。利己的な行動をしていない。他のメンバーを尊重している。",
      "技術的にできることは多くはないが、自分のタスクを早めに終わらせて他の人のタスクを担当できる時間を作ったり、RAIDENチームの疑問等は自分のできる範囲で早めにレスポンスをするように心掛けています。", true),
    new Content("+5", "自身の成長を意識し、努力している。明確な目標を持って取り組んでいる。技術的なチャレンジに熱心である。",
      "自分の中での目標は明確に決め、日常的に少しずつ努力を重ねている。やりたいと思ったことは諦めずにチャレンジし続けています。", false),
    new Content("+4", "メンバーの育成に取り組み、成果を上げている。",
      "入沢さんの教育のためにアプリを作成した。この取り組みにより入沢さんの理解度は深まったと思います。", true),
    new Content("+2", "お客様の信頼を得ており、継続的に利益を上げている。",
      "信頼は失ってはいないとは思います。個人的には自分の役割以上のことをやっているつもりではあるが、お客さんがどう思っているかは不明。", false),
    new Content("+1", "社内業務に積極的に取り組んでいる。業務改善に熱心である。",
      "VISITOの取り組みを行なっているが、進捗が遅いのが心残り。", true),
    new Content("+2", "報連相が適切である。", "不適切ではないと思います。", false),
    new Content("+3", "勤務姿勢や態度が良好である。", "良好です。", true),
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
  font-size: 62.5%;
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
}
</style>
