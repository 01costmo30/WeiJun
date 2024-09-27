<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SubMenu from './SubMenu.vue';

var router = useRouter();
var routes = router.getRoutes().filter(item => item.path !== '/' && item.path !== '').reverse();

onMounted(() => {

  $('#mast-menu .right.menu .item.ui.dropdown').dropdown()
})
</script>
<template>
  <div class="ui top fixed secondary pointing massive menu" id="mast-menu">
    <RouterLink class="ui big header item" to="/">
      <img class="ui medium image" alt="Vue logo" src="/img/3.png" />
      蔡煒鈞
    </RouterLink>
    <div class="right menu" style="font-size: 1.5rem;">
      <RouterLink class="item" v-for="item in routes" :to="item.path">{{ item.name }}</RouterLink>
      <SubMenu class="mobile right top pointing violet">
        <template #icon><i class="info circle icon"></i></template>
        <RouterLink class="item" v-for="item in routes" :to="item.path">{{ item.name }}</RouterLink>
      </SubMenu>
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
  text-shadow: 1px 1px #fff, 2px 2px #fff, 3px 3px #fff;
}

.ui.menu .header.item:active {
  border: 0;
  border-color: transparent;
}

.ui.menu .right.menu {
  padding: 0 1.5rem;
}

.ui.menu .right.menu>.item {
  padding: .5em;
  margin: 0 .8rem -2px;
}

.ui.menu .right.menu .item.active {
  border-bottom-width: .2em;
}

.ui.menu .right.menu .dropdown .menu .item.active.violet {
  color: #6435c9 !important;
  border-bottom: .2em solid #6435c9;
  padding-bottom: .58571429em !important;
}

@media screen and (min-width: 768px) {
  .ui.menu .right.menu .item.mobile {
    display: none;
  }
}

@media screen and (max-width: 767.98px) {
  .ui.menu .right.menu .item:not(.mobile) {
    display: none;
  }
}
</style>