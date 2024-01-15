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
        width="200px"
      >
      </el-table-column>
      <el-table-column
        label="医院编码"
        prop="hoscode"
        width="140px"
      >
      </el-table-column>
      <el-table-column
        label="医院地址"
        prop="apiUrl"
        width="200px"
      >
      </el-table-column>

      <el-table-column
        label="医院状态"
        width="150px"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.status == 0">可用</span>
          <span v-else>不可用</span>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="230px"
      >
        <template slot-scope="scope">
          <el-button @click="oneDelete(scope.row.id)" size="mini" type="primary">删除</el-button>
          <el-button size="mini" type="primary" @click="edit(scope.row.id)">修改</el-button>
          <el-button v-if="scope.row.status == 0" size="mini" type="success" @click="changeStatus(scope.row.id,1)">锁定</el-button>
          <el-button v-else size="mini" type="success" @click="changeStatus(scope.row.id,0)">解锁</el-button>
        </template>
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
      alert("删除选中的数据！")
      api.batchDelete(this.ids).then(response=>{
        this.$message({
          message:'删除成功！',
          type:'success'
        })
        this.getPageInfo()
      })
    },
    handleSelectionChange(arr){
      this.ids = arr.map(item=>{
        return item.id
      })
    },
    oneDelete(id){
      api.oneDelete(id).then(resp=>{
        this.getPageInfo()
      })
    },
    changeStatus(id,status){
      api.changeStatus(id,status).then(resp=>{
        this.getPageInfo()
      })
    },
    edit(id){
      this.$router.push('')
    }
    
  }
}
</script>
