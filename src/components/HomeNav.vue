<template>
  <nav class="navbar-wrap" id="app-nav">
    <div class="navbar-box wrap-box">
      <template v-if="isLogin">
        <router-link class="navbar-write-article" to="/add_article"
          >写文章</router-link
        >
      </template>

      <div class="navbar-main-content">
        <ul>
          <li class="nav-link">
            <router-link to="/">首页</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/MobileApp">标签</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/">相册</router-link>
          </li>
          <li class="nav-link">
            <router-link to="/">关于我</router-link>
          </li>
        </ul>
      </div>

      <div class="navbar-right">
        <ul class="navbar-right-nav">
          <template v-if="!isLogin">
            <li class="nav-link">
              <router-link to="/login">登录</router-link>
            </li>
            <li class="nav- item">
              <router-link to="/register">注册</router-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-linkn">
              <router-link to="/exit">退出</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {
      isLogin: false
    };
  },
  // props: [{
  //   isLogin: {
  //     type: Boolean,
  //     defalut: true
  //   }
  //   }
  //   ]
  beforeCreate() {}
};
</script>

<style lang="scss" scoped>
$nav-height: 56px;
$title-font: 20px;
.nav-top {
  height: 50px;
  background-color: $main-color;
}
.navbar-wrap {
  background-color: $main-color;
  height: $nav-height;

  .navbar-box {
    display: flex;
    height: 100%;

    .navbar-write-article {
      font-size: $title-font + 5;
    }

    .navbar-main-content {
      flex: 1 0 auto;
    }
  }
}

ul {
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  list-style: none;
  padding: 0;
  margin: 0;

  font-size: $title-font;
  line-height: $nav-height;
}

a {
  line-height: $nav-height;
  text-decoration: none;
  color: white;
  padding: 0 10px;
}
</style>
