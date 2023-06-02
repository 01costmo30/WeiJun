<script setup>
import { onMounted, onUpdated, nextTick } from 'vue';
import { RouterLink } from 'vue-router';
// import ContactInfo from './ContactInfo.vue';

onMounted(() => {
  nextTick(function () {
  setTimeout(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });


    var scene1 = document.getElementById('scene1');
    var parallaxInstance1 = new Parallax(scene1, {
      relativeInput: true
    })
    
  }, 400);
  })
  // $('.column .image img')
  // .visibility({
  // context    : '.dimmer',
  //   type       : 'image',
  //   transition : 'fade in',
  //   duration   : 1000
  // });
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

// function showModal() {
//   $('.ui.overlay.fullscreen.modal')
//     .modal({
//       inverted: true,
//       blurring: true,
//       onVisible: function () {
//         $('.column img.image')
//           .visibility({
//             context: '.scrolling.content',
//             type: 'image',
//             transition: 'fade in',
//             duration: 1000
//           });
//       }
//     }).modal('show');
// }
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
            <!-- <RouterLink class="ui tertiary massive button" to="/">Home</RouterLink> -->
            <!-- <RouterLink class="ui tertiary massive button" to="/about">聯絡信箱</RouterLink> -->
            <!-- <div class="ui tertiary massive button" @click="showModal">聯絡方式</div> -->
            <RouterLink class="ui tertiary massive button" to="/WeiJun/ContactUs">聯絡方式</RouterLink>
            <RouterLink class="ui tertiary massive button" to="/WeiJun/About">認識煒鈞</RouterLink>
          </nav>
        </div>
      </div>
      <div id="scene" class="column">
        <div data-depth="1" data-originX="0" class="ui medium pink image circle"></div>
        <div data-depth="0.6" data-originX="0.5" class="ui big purple image circle"></div>
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

#scene {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  /* overflow-y: hidden;
  overflow-x:visible; */
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
    max-height: 100vh;
    max-height: calc(var(--vh, 1vh) * 100);
    margin-top: -20vh;
    margin-top: calc(var(--vh, 1vh) * -20);
    margin-left: calc(100vw - 100vh * 0.6);
    margin-left: calc(100vw + var(--vh, 1vh) * -60);
    z-index: -1;
  }
}

@media screen and (max-width: 625px) {
  .ui.two.column.doubling.grid .column:nth-of-type(2) {
    max-height: 80vh;
    max-height: calc(var(--vh, 1vh) * 80);
    margin-top: 0;
    margin-left: 0;
  }

  #scene {
    min-height: 80vh;
    min-height: calc(var(--vh, 1vh) * 80);
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

@media screen and (max-width:425px) {

  .column .ui.huge.text:nth-of-type(1) {
    font-size: 18vw;
    margin-top: calc(80vh - 50vw);
  }

  .column .ui.huge.text:nth-of-type(2) {
    font-size: 18vw;
    margin-top: calc(80vh - 28vw);
  }
}
</style>