<template>
  <div>
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div
          id="sliderSegmentedControl"
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
          <div class="mui-scroll">
            <a
              class="mui-control-item mui-active"
              href="#item1mobile"
              data-wid="tab-top-subpage-1.html"
            v-for="item in category" :key="item.id"> {{ item.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
        category: [
            {
                id: 1,
                title: "标1"
            },
            {
                id: 2,
                title: "标2"
            },
            {
                id: 3,
                title: "标3"
            },
            {
                id: 4,
                title: "标4"
            },
            {
                id: 5,
                title: "标5"
            },
            {
                id: 6,
                title: "标6"
            },
            {
                id: 7,
                title: "标7"
            },
            {
                id: 8,
                title: "标8"
            },
        ]
    };
  },
  created() {},
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style>
* {
  touch-action: pan-y;
}
</style>