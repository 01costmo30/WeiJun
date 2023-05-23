<template>
  <div class="ui top fixed secondary pointing massive menu">
    <RouterLink class="ui big header item" to="/WeiJun">
      <img class="ui medium image" alt="Vue logo" src="/img/3.png" />
      蔡煒鈞
    </RouterLink>
    <div class="right menu" style="font-size: 1.5rem;">
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
}

.ui.menu .item.active {
  border-bottom-width: .2em;
}
</style>