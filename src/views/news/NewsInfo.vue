<template>
  <div class="newinfo-box">
    <h3 class="title">第 {{ data.title }}篇新闻</h3>

    <p class="subtitle">
      <span>创建时间: {{ data.time }}</span>
      <span>阅读量: {{ data.number }}次</span>
    </p>

    <hr />

    <div class="content" v-html="data.content"></div>

    <Comment
      :list="newsList"
      :clear="publishSuccess"
      @publishContent="publishContent"
      @loadMore="loadMore"
    ></Comment>
  </div>
</template>

<script>
import service from "../../service";
import Comment from "../../components/mobileApp/Comment";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      data: {},
      newsList: [],
      publishSuccess: false
    };
  },
  created() {
    this.getNewsInfo();
    this.getCommentList();
  },
  methods: {
    getNewsInfo() {
      service.getNewsInfo(this.id).then(res => {
        this.data = res.data.data;
      });
    },
    getCommentList() {
      service.getCommentInfo(this.id).then(res => {
        Toast("获取评论成功");
        this.newsList = res.data.data.list;
      });
    },
    publishContent(content) {
      service.addComment("梁泽", "陈瑛", content).then(res => {
        if (res.data.code == 1) {
          Toast("发表评论成功");
          this.getCommentList();
          this.publishSuccess = !this.publishSuccess;
        } else {
          Toast("发表评论失败");
        }
      });
    },
    loadMore() {
      console.log("load more");
    }
  },
  components: {
    Comment
  }
};
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