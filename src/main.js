// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入
import VueI18n from 'vue-i18n'

// 注册
Vue.use(VueI18n);

// 导入语言包
const i18n = new VueI18n({

  // 定义当前默认语言
  locale:'zh',
  //语言包声明
  messages:{
    'zh':require('./lang/zh'),
    'en':require('./lang/en')
  }



})

Vue.config.productionTip = false

require('!style-loader!css-loader!./assets/bootstrap/css/bootstrap.css');
require('!style-loader!css-loader!./assets/bootstrap/css/style.css');
require('!style-loader!css-loader!./assets/index.css');

/*引入axios*/
import Axios from 'axios'
Vue.prototype.axios = Axios;

// Axios.defaults.withCredentials = true;

import QS from 'qs'
Vue.prototype.qs = QS;

import HeyUI from 'heyui';
Vue.use(HeyUI);

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
