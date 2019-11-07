import Vue from "vue";

import "mint-ui/lib/style.css";
import { Header } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.component(Header.name, Header);

// Vue.prototype.$message = Message;
