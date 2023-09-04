<script setup>
</script>
<template>
  <div data-depth="0.6" data-originX="0.5" class="ui image circle"></div>
</template>
<style scoped>
.circle {
  border-radius: 100rem;
}

div>.circle {
  float: left;
}

div>.big.circle {
  margin: 6em 0 0 6em;
}

.ui.circle.image {
  padding-bottom: 100%;
}

.ui.medium.circle.image {
  /* height: min(300px, 100vw); */
  padding-bottom: min(300px, 100%);
}

.ui.large.circle.image {
  /* height: min(450px, 100vw); */
  padding-bottom: min(450px, 100%);
}

.ui.big.circle.image {
  /* height: min(600px, 100vw); */
  padding-bottom: min(600px, 100%);
}

.ui.huge.circle.image {
  /* height: min(800px, 100vw); */
  padding-bottom: min(800px, 100%);
}
</style>