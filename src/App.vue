<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="ui medium pink image circle"></div>
  <div class="ui big purple image circle"></div>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.pink {
  background-color: #efc1c5;
}

.purple {
  background-color: #9287ce;
}

.circle {
  border-radius: 100rem;
}

.ui.medium.circle.image {
  height: 300px;
}

.ui.large.circle.image {
  height: 450px;
}

.ui.big.circle.image{
  height: 600px;
}

.ui.huge.circle.image {
  height: 800px;
}
</style>
