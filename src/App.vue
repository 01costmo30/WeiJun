<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

onMounted(() => {
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true
  });

})

</script>

<template>
  <!-- <div class="ui header">
    <i class="circular colored red icon">3
    </i>蔡煒鈞
  </div> -->
  <div class="ui two column doubling grid">
    <div class="column">

      <img alt="Vue logo" class="logo" src="img/3.png" width="125" height="125" />

      <div class="ui basic massive segment">
        <!-- <HelloWorld msg="You did it!" /> -->
        <h1 class="ui massive header">
          <i class="circle outline icon"></i><i class="circle outline icon"></i><i class="circle outline icon"></i>
        </h1>

        <nav>

          <RouterLink class="ui tertiary button" to="/">Home</RouterLink>
          <RouterLink class="ui tertiary button" to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
    <div id="scene" class="column">
      <div data-depth="1" data-originX="0" class="ui medium pink image circle"></div>
      <div data-depth="0.6" data-originX="0.5" class="ui big purple image circle"></div>
      <img data-depth="0.2" data-originX="0" class="ui image" src="img/Photo1.png" />
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.pink {
  background-color: #efc1c5;
}

.purple {
  background-color: #9287ce;
}

.ui.grid {
  align-items: center;
  min-height: 100vh;
}

.circle {
  border-radius: 100rem;
}

div>.circle {
  float: left;
}

div>.big.circle {
  margin: 6em 0 0 6em;
}

#scene {
  min-height: 100vh;
}

/* #scene img {
  margin: 0em 0 0 -6em;
} */

.ui.medium.circle.image {
  height: 300px;
}

.ui.large.circle.image {
  height: 450px;
}

.ui.big.circle.image {
  height: 600px;
}

.ui.huge.circle.image {
  height: 800px;
}
</style>
