<template>
  <div class="app-container">
    <!-- <mt-header fixed title="固定在顶部"></mt-header> -->

    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h2 class="mui-title">Title</h2>
    </header>

    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" to="mainpage">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/MobileApp/shopCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 44px;
  overflow-x: hidden;
}

.v-enter{
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active, .v-leave-active {
  transition: all 0.25s ease;
}
</style>