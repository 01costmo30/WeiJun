<template>
  <div class="ui secondary pointing massive menu">
    <RouterLink class="ui large header item" to="/WeiJun">
      <img class="ui medium image" alt="Vue logo" src="/img/3.png" />
      蔡煒鈞
    </RouterLink>
    <div class="right menu">
      <RouterLink class="item" to="/WeiJun/About">認識煒鈞</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.ui.secondary.pointing.menu {
  border-bottom: none;
}

.ui.menu .header.item {
  padding: 1rem 1.5rem;
}
</style>