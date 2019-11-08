<template>
  <div id="jzt-comment">
    <h3>发表评论</h3>
    <hr>

    <textarea placeholder="请输入要bb的内容(最多120字)" maxlength="120" rows="4" v-model="body"></textarea>

    <mt-button type="primary" size="large" @click="publishContent">发表评论</mt-button>

    <ul class="cmt-list">
        <li class="cmt-item" v-for="item in list" :key=item.id>
            <p class="cmt-item-title">{{ titleFor(item) }}</p>
            <p class="cmt-item-body">
                {{item.content}}
            </p>
        </li>
    </ul>
    <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>

  </div>
</template>

<script>
export default {
    data() {
        return {
            body: ""
        }
    },
    props: [
        "list",
        "clear"
    ],
    methods: {
        publishContent() {
            this.$emit("publishContent", this.body)
        },
        loadMore() {
            this.$emit("loadMore")
        },
        titleFor(item) {
            return "发表人: " + item.from + " " + "发表时间: " + item.createtime  
        }
    },
    watch: {
        clear() {
            console.log(this.clear);
            
            this.body = ""
        }
    }

};
</script>

<style lang="scss" scoped>
#jzt-comment {
    h3 {
        font-size: 16px;
    }

    hr {
        height: 0.5px;
        background-color: gray;
    }

    textarea {
        font-size: 14px;
        margin: 0;
    }

    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            .cmt-item-title{
                background-color: #ccc;
                font-size: 13px;
                line-height: 35px;
            }

            .cmt-item-body {
                text-indent: 2em;
            }
        }
    }
}
</style>