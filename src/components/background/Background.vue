<template>
  <div class="background"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.background {
  background: linear-gradient(115.58deg, #00FC19 0%, #1700A4 100.22%),
              radial-gradient(92.72% 100% at 50% 0%, #EBFFCB 0%, #651200 100%),
              radial-gradient(92.72% 100% at 50% 0%, #2bff00 0%, #820000 100%),
              radial-gradient(109.21% 213.32% at 100% 0%, #FF4D00 0%, #00C2FF 100%),
              linear-gradient(127.43deg, #D50000 0%, #6CBAD8 100%);
  background-blend-mode: lighten, overlay, lighten, screen, normal;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>