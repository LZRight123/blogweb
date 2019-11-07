<template>
  <li>
    <router-link :to="to" class="t-cell">
      <img :src="item.img_url" alt />
      <div class="right-box">
        <p class="title">{{ item.title }}</p>
        <p class="sub-box">
          <span>发表时间: {{ item.add_time }}</span>
          <span>点击: {{ item.click }}</span>
        </p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    },
    to: {
      type: String,
      default: "#"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.t-cell {
  display: flex;
  height: 80px;
  border-bottom: 1px solid $line-color;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    margin-left: 10px;
  }

  .right-box {
    flex-grow: 1;
    padding: 10px 10px 0px;

    .sub-box {
      display: flex;
      justify-content: space-between;
      color: blueviolet;
    }
  }
}
</style>