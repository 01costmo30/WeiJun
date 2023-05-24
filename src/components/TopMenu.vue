<script setup>
// import ContactInfo from './ContactInfo.vue';

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
  <div class="ui top fixed secondary pointing massive menu">
    <RouterLink class="ui big header item" to="/WeiJun">
      <img class="ui medium image" alt="Vue logo" src="/img/3.png" />
      蔡煒鈞
    </RouterLink>
    <div class="right menu" style="font-size: 1.5rem;">
      <!-- <div class="item" @click="showModal">聯絡方式</div> -->
      <RouterLink class="item" to="/WeiJun/ContactUs">聯絡方式</RouterLink>
      <RouterLink class="item" to="/WeiJun/About">認識煒鈞</RouterLink>
    </div>
  </div>
  <!-- <ContactInfo></ContactInfo> -->
</template>
<style scoped>
.ui.secondary.pointing.menu {
  border-bottom: none;
}

.ui.menu .header.item {
  padding: 1rem 1.5rem;
  align-items: flex-end;
  padding-bottom: 0.2rem;
}

.ui.menu .header.item:active {
  border: 0;
  border-color: transparent;
}

.ui.menu .right.menu {
  padding: 0 1.5rem;
}

.ui.menu .right.menu .item {
  padding: .5em;
  margin: 0 .8rem -2px;
}

.ui.menu .item.active {
  border-bottom-width: .2em;
}
</style>