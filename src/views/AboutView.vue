<script setup>
import { onMounted } from 'vue';
import TopMenu from '../components/TopMenu.vue';
onMounted(() => {
  $('.ui.button[data-page]').on('click', function () {
    var prev = $('.shape .side.active').data('page')
    var next = $(this).data('page')

    $('.ui.button[data-page]').removeClass('active')
    $(this).addClass('active')

    if (prev > next)
      $('.shape').shape('set next side',
        '.side[data-page=' + next + ']').shape('flip left')
    else
      $('.shape').shape('set next side',
        '.side[data-page=' + next + ']').shape('flip right')

  })
})
</script>
<template>
  <TopMenu></TopMenu>
  <!-- <RouterLink to="/WeiJun">新民里大小事 蔡煒鈞</RouterLink> -->
  <div class="about ui container">
    <div class="ui two column stackable grid">
      <div class="column">
        <div class="ui basic segment">
          <div class="ui basic compact active button" data-page="1">你是誰？</div>
          <div class="ui basic compact button" data-page="2">經歷</div>
          <div class="ui basic compact button" data-page="3">為什麼想出來選里長？</div>
          <div class="ui basic compact button" data-page="4">你年輕沒經驗，怎麼做事？</div>
        </div>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
#app:has(.ui.secondary.menu) {
  background: url('@/assets/mesh-743.png');
}

.shape .side .justify {
  text-align: justify;
}
</style>
 