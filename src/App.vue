<template>
  <BackGround/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BackGround from './components/BackGround.vue';

@Options({
  components: {
    BackGround,
  },
})
export default class App extends Vue {}
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
