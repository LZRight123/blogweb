<template>
  <div id="mainpage">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in cycleList" :key="item.id">
        <img :src="item.url" alt />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="grid-box">
      <li>
        <router-link to="mainpage/newslist" class="grid-item">
          <i class="mui-icon mui-icon-home"></i>
          <h6 class="grid-item-title">新闻咨询</h6>
        </router-link>
      </li>
      <li>
        <router-link to="mainpage/images" class="grid-item">
          <i class="mui-icon mui-icon-email"></i>
          <h6 class="grid-item-title">图片分享</h6>
        </router-link>
      </li>
      <li>
        <router-link to="child" class="grid-item">
          <i class="mui-icon mui-icon-chatbubble"></i>
          <h6 class="grid-item-title">商品购买</h6>
        </router-link>
      </li>
      <li>
        <router-link to="child" class="grid-item">
          <i class="mui-icon mui-icon-location"></i>
          <h6 class="grid-item-title">留言反馈</h6>
        </router-link>
      </li>
      <li>
        <router-link to="child" class="grid-item">
          <i class="mui-icon mui-icon-phone"></i>
          <h6 class="grid-item-title">视屏专区</h6>
        </router-link>
      </li>
      <li>
        <router-link to="child" class="grid-item">
          <i class="mui-icon mui-icon-gear"></i>
          <h6 class="grid-item-title">联系我们</h6>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import service from "../../service";
export default {
  data() {
    return {
      cycleList: []
    };
  },
  created() {
    this.getLunBo();
  },
  methods: {
    getLunBo() {
      service.getLunBoTu().then(res => {
        if (res.data.code == 1) {
          this.cycleList = res.data.data.list;
        }
      });
    }
  }
};
</script>

<style lang="scss">
#mainpage {
  .mint-swipe {
    height: 200px;
    .mint-swipe-items-wrap {
      .mint-swipe-item {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .mint-swipe-indicator {
    // background: red !important;
    background-color: black;
    opacity: 0.5;
    &.is-active {
      background-color: orange;
      opacity: 1;
    }
  }

  .grid-box {
    padding: 20px 0px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 90px;
    grid-gap: 1px;

    .grid-item {
      width: 100%;
      height: 100%;
      display: grid;
      justify-items: center;
      align-content: center;

      .mui-icon {
        color: orange;
        margin-bottom: 5px;
      }

      .grid-item-title {
        color: $fade-text-color;
        margin-top: 5px;
      }
    }
  }
}
</style>
