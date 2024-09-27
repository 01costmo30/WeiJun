<script setup>
import { onMounted, onUpdated, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import Bubble from './Bubble.vue';

var router = useRouter();
var routes = router.getRoutes().filter(item => item.path !== '/' && item.path !== '').reverse();

onMounted(() => {
  nextTick(function () {
    // setTimeout(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });


    var scene1 = document.getElementById('scene1');
    var parallaxInstance1 = new Parallax(scene1, {
      relativeInput: true
    })
  })
})

onUpdated(() => {
  nextTick(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });


    var scene1 = document.getElementById('scene1');
    var parallaxInstance1 = new Parallax(scene1, {
      relativeInput: true
    })
  })
})
</script>

<template>
  <div class="ui basic segment">
    <div class="ui two column doubling grid">
      <div class="column">
        <div id="scene1" class="ui basic massive segment">
          <h1 data-depth="0.2" data-origin-x=".6" class="ui massive header">
            <img alt="Vue logo" class="logo" src="/img/3.png" width="125" height="125" />
            <span class="ui header">蔡煒鈞</span>
          </h1>

          <nav data-depth="0.2" data-origin-x="1" data-origin-y="1">
            <RouterLink class="ui tertiary violet massive button" v-for="item in routes" :to="item.path">{{ item.name }}</RouterLink>
          </nav>
        </div>
      </div>
      <div id="scene" class="column">
        <Bubble data-depth="1" data-originX="0" class="medium pink"></Bubble>
        <Bubble data-depth="0.6" data-originX="0.5" class="big purple"></Bubble>
        <img data-depth="0.2" data-originX="0" class="ui image" src="/img/Photo1.png" />
        <span data-depth="0.1" data-origin-x=".5" data-origin-y=".5" class="ui huge massive text">煒鈞用心</span>
        <span data-depth="0.1" data-origin-x=".5" data-origin-y=".5" class="ui huge massive text">新民創新</span>
      </div>
    </div>

    <!-- <ContactInfo></ContactInfo> -->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;500;600;700;900&display=swap');

.pink {
  background-color: #efc1c5;
}

.purple {
  background-color: #9287ce;
}

.ui.grid {
  align-items: center;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
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

.ui.violet.tertiary.button:not(:hover) {
  color: rgba(0, 0, 0, .6);
}

.ui.violet.tertiary.button:hover {
  color: #6435c9;
  -webkit-box-shadow: inset 0 -0.2em 0 #6435c9;
  box-shadow: inset 0 -0.2em 0 #6435c9;
}

#scene {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  /* overflow-y: hidden;
  overflow-x:visible; */
}

/* #scene img {
  margin: 0em 0 0 -6em;
} */

.ui.massive.header {
  display: flex !important;
  align-items: flex-start;
  width: 100%;
}

.ui.massive.header img {
  margin-top: 0;
  max-width: max(1.5em, 10vw);
}

.ui.massive.header .header {
  margin-top: 0;
  font-size: max(1.28em, 9vw);
  text-shadow: 1px 1px #fff, 2px 2px #fff, 3px 3px #fff, 4px 4px #fff;
}

nav {
  margin-top: max(4em, 12vw);
  margin-left: 2em;
  pointer-events: all;
}

.column .ui.huge.text {
  font-weight: bold;
  font-family: 'Noto Serif TC', serif;
  color: #9287ce;
  text-shadow: 1px 1px #fff, 2px 2px #fff, 3px 3px #fff, 4px 4px #fff;
  font-size: 11vh;
}

.column .ui.huge.text:nth-of-type(1) {
  margin-top: calc(100vh - 3em);
}

.column .ui.huge.text:nth-of-type(2) {
  margin-top: calc(100vh - 1.5em);
  margin-left: 1em;
}

.ui.overlay.fullscreen.modal,
.ui.overlay.fullscreen.modal .content {
  background: center / cover no-repeat url('@/assets/mesh-743.png');
}

.ui.ui.overlay.fullscreen.modal .scrolling.content {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  max-height: 100vh;
  max-height: calc(var(--vh, 1vh) * 100);
}

.ui.modal .content .ui.grid {
  min-height: 100%;
}

.ui.modal .content .column img.image {
  filter: drop-shadow(0px 0px 8px white);
}

.ui.modal .content .header.label {
  border-radius: 2em;
  width: 100%;
  margin-top: .5em;
}

@media screen and (max-width: 991px) {
  .ui.grid {
    align-items: unset;
  }

  .ui.two.column.doubling.grid .column:nth-of-type(1) {
    max-height: 20vh;
    max-height: calc(var(--vh, 1vh) * 100);
  }

  .ui.two.column.doubling.grid .column:nth-of-type(2) {
    /* max-height: 100vh;
    max-height: calc(var(--vh, 1vh) * 100);
    margin-top: -20vh;
    margin-top: calc(var(--vh, 1vh) * -20);
    margin-left: calc(100vw - 100vh * 0.6);
    margin-left: calc(100vw + var(--vh, 1vh) * -60); */
    width: 90vw !important;
    margin-left: auto;
    z-index: -1;
  }
}

@media screen and (max-width: 625px) {
  .ui.two.column.doubling.grid #scene.column:nth-of-type(2) {
    min-height: 80vh;
    min-height: calc(var(--vh, 1vh) * 80);
    max-height: 80vh;
    max-height: calc(var(--vh, 1vh) * 80);
    margin-top: 0;
    width: 90vw !important;
    margin-left: auto;
  }

  .column .ui.huge.text:nth-of-type(1) {
    margin-top: calc(80vh - 3em);
  }

  .column .ui.huge.text:nth-of-type(2) {
    margin-top: calc(80vh - 1.5em);
  }

  .ui.massive.header img {
    width: 17vw;
  }

  .ui.massive.header .ui.header {
    font-size: 16vw;
  }

  nav {
    margin-top: 22vw;
  }
}

@media screen and (max-width: 425px) {
  .ui.two.column.doubling.grid #scene.column:nth-of-type(2) {
    width: 95vw !important;
  }

  .column .ui.huge.text:nth-of-type(1) {
    font-size: 18vw;
    margin-top: calc(80vh - 50vw);
  }

  .column .ui.huge.text:nth-of-type(2) {
    font-size: 18vw;
    margin-top: calc(80vh - 28vw);
  }
}

@media screen and (max-width: 375px) {
  nav .ui.ui.ui.massive.button {
    font-size: 1.42857143rem;
  }
}

@media screen and (max-width: 300px) {
  nav {
    margin-left: 1.5em;
  }
  nav .ui.ui.ui.massive.button {
    padding: .5em .3em !important;
  }

  .column .ui.huge.text:nth-of-type(1) {
    font-size: 18vw;
    margin-top: calc(80vh - 80vw);
  }

  .column .ui.huge.text:nth-of-type(2) {
    font-size: 18vw;
    margin-top: calc(80vh - 58vw);
  }

  .ui.two.column.doubling.grid #scene.column:nth-of-type(2) {
    max-height: 68vh;
    max-height: calc(var(--vh, 1vh) * 68);
    min-height: 68vh;
    min-height: calc(var(--vh, 1vh) * 68);
    margin-top: auto;
  }
}
</style>