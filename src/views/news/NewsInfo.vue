<template>
  <div class="newinfo-box">
      <h3 class="title">第 {{ data.title }}篇新闻</h3>

      <p class="subtitle">
      <span>创建时间: {{ data.time }}</span>
      <span>阅读量: {{ data.number }}次</span>
      </p>

      <hr>

      
      <div class="content" v-html="data.content">
      </div>

  </div>
</template>

<script>
import service from "../../service"
export default {
    data() {
        return {
            id: this.$route.params.id,
            data: {}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo() {
            service.getNewsInfo(this.id)
                .then(res => {
                    this.data = res.data.data
                })
        }
    },
}
</script>

<style lang="scss" scoped> 
.newinfo-box {
    padding: 0 8px;
    .title {
        text-align: center;

    }
    .subtitle {
        display: flex;
        color: blueviolet;
        justify-content: space-between;
    }
}

</style>