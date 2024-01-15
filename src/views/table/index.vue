<template>
  <div class="app-container">

    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="form.hosname" placeholder="医院名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="form.hoscode" placeholder="医院编码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="Search()">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Clear()">清空</el-button>
      </el-form-item>
    </el-form>

    <el-table 
      v-loading="loading"
      @selection-change="handleSelectionChange"
      element-loading-text="数据加载中"
      :data="tableData">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="序号"
        type="index"
      >
      </el-table-column>

      <el-table-column
        label="医院名称"
        prop="hosname"
      >
      </el-table-column>
      <el-table-column
        label="医院编码"
        prop="hoscode"
      >
      </el-table-column>
      <el-table-column
        label="医院地址"
        prop="apiUrl"
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
    <div style="margin-top: 10px;margin-bottom: 10px;">
      <el-button type="primary" @click="batchDelete()">批量删除</el-button>
    </div>
    <div class="block" style="text-align: center;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size=size
        background
        layout="total, sizes, prev, pager, next"
        :total=total>
      </el-pagination>
    </div>
  </div>
</template>

<script>

import api from '@/api/hospset.js'
export default {
  data() {
    return {
      tableData:[],
      loading:true,
      form:{},
      currentPage:1,
      size:5,
      total:1,
      ids:[]
    }
  },
  created() {
    this.getPageInfo()
  },
  methods: {
    getPageInfo(){
      api.getPageInfo(this.currentPage,this.size,this.form).then(response=>{
        this.tableData = response.data.item
        this.loading = false
        this.total = response.data.total
      })
    },
    Search(){
      this.getPageInfo()
    },
    Clear(){
      this.form = {}
      this.getPageInfo()
    },
    handleCurrentChange(val){
      this.currentPage = val
      this.getPageInfo()
    },
    handleSizeChange(val){
      this.size = val
      this.getPageInfo()
    },
    batchDelete(){
      console.log(this.ids)
    },
    handleSelectionChange(arr){
      // this.ids = arr.map(item=>{
      //   return item.id
      // })
    }
    
  }
}
</script>
