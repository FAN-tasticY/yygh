<template>
  <div>
    <el-table
      v-loading="loading"
      element-loading-text="数据加载中"
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="dictCode"
        label="编码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="value"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
    </el-table>
  </div>
  </template>
  <script>
  import cmn from '@/api/cmn.js'
    export default {
      data() {
        return {
          tableData: [],
          loading:true
        }
      },
      methods: {
        load(tree, treeNode, resolve) {
          cmn.getInfoByPid(tree.id).then(response=>{
            resolve(response.data.dict)
          })
        }
      },
      created(){
        cmn.getInfoByPid(1).then(response=>{
          this.tableData = response.data.dict
          this.loading = false
        })
      }
    }
  </script>