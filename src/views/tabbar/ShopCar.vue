<template>
  <div>
    <mt-button type="primary" size="small" plain @click="addShopCar">添加购物车</mt-button>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
      <div class="ball" ref="ball" v-show="ballFlag"></div>
    </transition>

        <mt-button type="primary" size="small" plain @click="xiaoyan">消炎</mt-button>

  </div>
</template>

<script>



export default {
  data() {
    return {
      ballFlag: false,
      content: "12345"
    };
  },
  created() {
          window.tempVm = this
  },
  components: {
    // jzt: () => import("./jzt.vue")
  },
  methods: {
    xiaoyan() {
      
    },
    addShopCar() {
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter: function(el) {
      el.style.transform = "translate(0,0)";
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {
      console.log(this.$refs.ball.getBoundingClientRect());
      
      // ...
      el.offsetWidth;
      el.style.transform = "translate(130px, 475px)";
      el.style.transition = "all 0.25s cubic-bezier(.31,.58,.95,.54)";
      done();
    },
    afterEnter: function() {
      this.ballFlag = !this.ballFlag;
    }
  }
};
</script>

<style lang="scss" scoped>
.ball {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 47px;
  left: 75px;
  border-radius: 50%;
  background-color: red;
  z-index: 99;
}
</style>
