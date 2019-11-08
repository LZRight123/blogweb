import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 饿了么组件
import "./plugins/element.js";
import "./plugins/mint-ui.js";
// 验证
import { ValidationProvider } from "vee-validate";
// mui
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
// import "./lib/mui/js/mui.js";

// hotcss 导入js文件
// import "./lib/hotcss/hotcss.js";

Vue.config.productionTip = false;
// Register it globally
Vue.component("ValidationProvider", ValidationProvider);

// 定义全局的过滤器
// 导入格式化时间插件
import moment from "moment";
Vue.filter("dataFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});

var appVM = new Vue({
  router,
  store,
  render: h => h(App)
});

appVM.$mount("#app");

// console.log("=============");

// console.log(this);
// console.log(window);
window.appVM = appVM;
// console.log("appVm = ", appVM);
