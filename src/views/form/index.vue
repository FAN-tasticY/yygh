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
    <div style="margin-top: 10px;">
      <el-button size="mini" type="primary" @click="upload()">上传</el-button>
      <el-button size="mini" type="success" @click="download()">导出</el-button>
    </div>

    

    <el-dialog
      :visible.sync="dialogVisible"
      width="30%">
      <el-form>
        <el-form-item label="文件上传">
          <el-upload
            class="upload-demo"
            :action="'http://localhost:8202/admin/cmn/upload'"
            :multiple="false"
            :on-success="success"
            >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      
      
    </el-dialog>

  </div>
  </template>
  <script>
  import cmn from '@/api/cmn.js'
    export default {
      data() {
        return {
          tableData: [],
          loading:true,
          dialogVisible:false
        }
      },
      methods: {
        load(tree, treeNode, resolve) {
          cmn.getInfoByPid(tree.id).then(response=>{
            resolve(response.data.dict)
          })
        },
        download(){
          window.open('http://localhost:8202/admin/cmn/download')
          this.$message.success("成功")
        },
        upload(){
          this.dialogVisible = true
        },
        success(){
          this.$message.success('文件上传成功')
          cmn.getInfoByPid(1).then(response=>{
            this.tableData = response.data.dict
            this.loading = false
          })
          this.dialogVisible = false
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