<template>
  <div>
      <ul class="table-view">
          <TableCell v-for="item in dataSource" :item="item" :key="item.id" :to="'/MobileApp/home/newsinfo/' + item.id ">
          </TableCell>
      </ul>
  </div>
</template>

<script>
import TableCell from "../../components/mobileApp/TableCell.vue";
import service from "../../service";
export default {
    data () {
        return {
            dataSource: []
        }
    },
    created () {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            service.getNewsList()
                .then(res => {
                    if (res.data.code === 1) {
                        this.dataSource = res.data.data.list                        
                    }
                })
        },
        clickCell(model) {
            console.log(model);
            
        }
    },
    components: {
        TableCell
    }
}
</script>

<style lang="scss" scoped>
ul {
    margin: 0;
}
</style>