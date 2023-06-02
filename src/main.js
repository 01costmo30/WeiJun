import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(window).on('resize', function () {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})

const app = createApp(App)

app.use(router)

app.mount('#app')
