<template>
  <div class="background"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(115.58deg, #00fc19 0%, #1700a4 100.22%),
    radial-gradient(92.72% 100% at 50% 0%, #ebffcb 0%, #651200 100%),
    radial-gradient(92.72% 100% at 50% 0%, #2bff00 0%, #820000 100%),
    radial-gradient(109.21% 213.32% at 100% 0%, #ff4d00 0%, #00c2ff 100%),
    linear-gradient(127.43deg, #d50000 0%, #6cbad8 100%);
  background-blend-mode: lighten, overlay, lighten, screen, normal;
}
</style>
