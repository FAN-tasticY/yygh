<template>
  <div class="app-container">
    <el-table 
      v-loading="loading"
      element-loading-text="数据加载中"
      :data="tableData">

      <el-table-column
        label="序号"
        type="index"
      >
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="createTime"
      >
      </el-table-column>
      <el-table-column
        label="修改时间"
        prop="updateTime"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import service from '@/utils/request'
export default {
  data() {
    return {
      tableData:[],
      loading:true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      let data = {
        hoscode:10000
      }
      service.post("/admin/hosp/hospitalSet/pageHelper/1/5",JSON.stringify(data),{
        headers:{
          'Content-type':'application/json'
        }
      }).then(data=>{
        this.tableData = data.data.item
      })

      setTimeout(() => {
        this.loading = false
      }, 1000);
    }
    
  }
}
</script>
