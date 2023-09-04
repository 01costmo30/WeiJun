<script setup>
import { onMounted, onUpdated, nextTick } from 'vue';
import TopMenu from '../components/TopMenu.vue';
import Bubble from '../components/Bubble.vue';
import StyledTxt from '../components/StyledTxt.vue';

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

    // }, 100);
  })

  $('.ui.button[data-page]').on('click', function () {
    var prev = $('.shape .side.active').data('page')
    var next = $(this).data('page')

    $('.ui.button[data-page]').removeClass('active')
    $(this).addClass('active')

    if (prev > next)
      $('.shape').shape('set next side',
        '.side[data-page=' + next + ']').shape('flip up')//.transition('fade in', '1000ms')
    else
      $('.shape').shape('set next side',
        '.side[data-page=' + next + ']').shape('flip down')//.transition('fade in', '1000ms')
  })
})
</script>
<template>
  <div class="ui basic tablet-fitted segment">
    <TopMenu></TopMenu>
    <!-- <div class="about ui fluid container"> -->
    <div class="ui teblet reversed mobile reversed two column stackable grid">
      <div class="center aligned column" id="scene">
        <StyledTxt data-depth="0.1" class="desktop" style="text-align: left;margin-left: 1.5rem;">認識煒鈞</StyledTxt>
        <div class="ui padded vertically fitted basic segment" data-depth="0.1">
          <div class="ui basic large compact active button" data-page="1">你是誰？</div>
          <div class="ui basic large compact button" data-page="2">經歷</div>
          <div class="ui basic large compact button" data-page="3">為什麼想出來選里長？</div>
          <div class="ui basic large compact button" data-page="4">你年輕沒經驗，怎麼做事？</div>
        </div>
        <div class="ui vertically fitted big basic segment" data-depth="0.1">
          <div class="ui square shape">
            <div class="sides">
              <div class="side active" data-page="1">
                <div class="content">
                  <div class="justify">
                    我是從小在新民里長大的煒鈞，大學期間加入多種服務性社團，不只經驗累積，也學到許多溝通、協調的技巧。只要交代給我的工作，都會盡力做到最完美。
                  </div>
                </div>
              </div>
              <div class="side" data-page="2">
                <div class="content">
                  <div class="justify">
                    元智大學學生會、TEDxYZU成員、旅行與閱讀基金會-行銷企劃、天河創思出版社-執行編輯、元智大學-教學助理
                  </div>
                </div>
              </div>
              <div class="side" data-page="3">
                <div class="content">
                  <div class="justify">
                    這個社區經過時間的流逝，我長大了，它卻衰老了。<br />
                    有「生活感」的社區，應該是充滿人的氣息，處處有人活動的痕跡，新民里的年齡結構其實很健康，那大家究竟都去了哪裡？答案很簡單，因為沒有好的空間或活動能讓居民聚集。既然發現了問題，也想要改變，那就自己參與，共同打造一個理想社區該有的模樣。
                  </div>
                </div>
              </div>
              <div class="side" data-page="4">
                <div class="content">
                  <div class="justify">
                    我認為年輕的優勢是善於用新方法解決舊問題，我們有新工具和創意，並且充滿熱情與活力，願意努力，期許能為新民里帶來新氣象。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="ui basic fitted segment"></p>
        </div>
      </div>
      <div class="column" id="scene1">
        <Bubble data-depth="1" data-originX="0" class="medium purple"></Bubble>
        <Bubble data-depth="0.6" data-originX="0.5" class="big pink"></Bubble>
        <img data-depth="0.2" data-originX="0" class="ui image" src="/img/Photo1.png" />
        <StyledTxt data-depth="0.1" data-origin-x=".5" data-origin-y=".5" class="tablet">認識煒鈞</StyledTxt>
        <!-- <div class="ui text" data-depth="0.3">
          <i class="huge graduation cap icon"></i>
        </div>
        <div class="ui text" data-depth="0.4" data-origin-x="0.5" data-origin-y="0.5">
          <i class="huge suitcase icon"></i>
        </div> -->

        <div class="clear bg-trans"></div>
      </div>
    </div>
    <div class="ui basic tablet tablet-bg-white segment"></div>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.pink {
  background-color: #efc1c5;
}

.purple {
  background-color: #9287ce;
}

#scene1 {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  /* overflow-y: hidden;
  overflow-x:visible; */
}

#scene1.column .ui.huge.text:nth-of-type(1) {
  margin-top: calc(100vh - 1.5em);
  z-index: 1;
  margin-left: .2em;
}

.clear {
  clear: both;
}

#app:has(.ui.secondary.menu) {
  background: url('@/assets/mesh-743.png');
}

.ui.square.shape.animating {
  width: 100%;
}

.shape .side .justify {
  text-align: justify;
}

.ui.segment .button[data-page] {
  margin-bottom: .5rem;
  pointer-events: auto;
}

#scene [data-depth] {
  position: relative !important;
  ;
}

.ui.grid {
  overflow: hidden;
}

.ui.grid .column:has(.square) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ui.grid .column img {
  object-fit: cover;
  width: min(90vw, 90%);
  height: min(120vw, 100vh);
  object-position: top;
  margin: 5% auto 0;
}

i.graduation {
  transform: rotate(-25deg);
  top: 5vh;
  left: 10vw;
}

i.suitcase {
  transform: rotate(30deg);
  top: 50vh;
  left: 60vw;
}

@media screen and (max-width: 132.49vh) {
  .ui.grid {
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
  }

  #scene1 {
    margin-top: auto;
    height: min(120vw, 100vh);
    min-height: unset;
  }

  .ui.grid .column img {
    width: auto;
    max-width: unset;
  }
}

@media screen and (min-width: 768px) {
  .ui.grid {
    max-height: 100vh;
  }

  .ui.tablet.segment {
    display: none;
  }

  .tablet.text {
    display: none;
    opacity: 0;
  }
}

@media screen and (max-width: 767.98px) {

  #scene {
    background: #fff;
    z-index: 1;
    margin-top: -2px !important;
  }

  #scene1 {
    min-height: 90vh;
    min-height: calc(var(--vh, 1vh) * 90);
    max-height: 90vh;
    max-height: calc(var(--vh, 1vh) * 90);
  }

  .ui.grid .column img {
    height: min(120vw, 85vh);
  }

  .bg-trans {
    width: 100vw;
    min-height: 90vh;
    min-height: calc(var(--vh, 1vh) * 90);
    background: linear-gradient(0deg, white 0%, white 5%, rgba(255, 255, 255, .1) 36%, transparent 45%);
  }

  #scene1.column .ui.huge.text:nth-of-type(1) {
    margin-top: calc(90vh - 1.5em);
    margin-left: 1.5rem;
    z-index: 1;
  }

  .ui.tablet-fitted.segment {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }

  .tablet.tablet.tablet-bg-white {
    background-color: #fff;
  }

  .desktop.text {
    display: none !important;
    opacity: 0;
    visibility: hidden;
  }
}

@media screen and (max-width: 475px) {

  #scene1 {
    min-height: 63vh;
    min-height: calc(var(--vh, 1vh) * 63);
    max-height: 63vh;
    max-height: calc(var(--vh, 1vh) * 63);
  }

  .ui.grid .column img {
    width: min(100vw, 100%);
    height: min(120vw, 63vh);
    min-height: 63vh;
    min-height: calc(var(--vh, 1vh) * 63);
    max-height: 63vh;
    max-height: calc(var(--vh, 1vh) * 63);
  }

  .bg-trans {
    min-height: 64vh;
    min-height: calc(var(--vh, 1vh) * 64);
    max-height: 64vh;
    max-height: calc(var(--vh, 1vh) * 64);
  }

  #scene1.column .ui.huge.text:nth-of-type(1) {
    margin-top: calc(63vh - 1.5em);
    z-index: 1;
  }
}

@media screen and (max-width: 425px) {
  #scene1.column .ui.huge.text:nth-of-type(1) {
    font-size: 18vw;
  }
}
</style>