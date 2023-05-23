<script setup>
import { onMounted } from 'vue';

onMounted(()=> {
  $('.ui.overlay.fullscreen.modal')
    .modal({
      inverted: true,
      blurring: true,
      onVisible: function () {
        $('.column img.image')
          .visibility({
            context: '.scrolling.content',
            type: 'image',
            transition: 'fade in',
            duration: 1000
          });
      }
    }).modal('show');
})
</script>
<template>

  <div class="ui overlay fullscreen modal">
    <i class="close icon"></i>
    <div class="scrolling content">
      <div class="ui three column doubling stackable vary padded grid">
        <div class="column">
          <img class="ui image" data-src="QR code/OfficalQRCode.png" />
          <a href="https://lin.ee/4k4FgLt" target="_blank">
            <h1 class="ui green center aligned basic header label">LINE</h1>
          </a>
        </div>
        <div class="column">
          <img class="ui image" data-src="QR code/qrCode.png" />
          <a href="https://www.facebook.com/ilovesinminli/?ref=page_internal" target="_blank">
            <h1 class="ui blue center aligned basic header label">FB粉專</h1>
          </a>
        </div>
        <div class="column">
          <img class="ui image" data-src="QR code/意見表qrCode.png" />
          <a href="https://forms.gle/LJdoo7mNJuumt9C17" target="_blank">
            <h1 class="ui violet center aligned basic header label">意見表單</h1>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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

</style>