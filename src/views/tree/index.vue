<template>
  <div>
    <el-form style="width: 75%;margin-top: 20px;" ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="医院名称" prop="hosname">
        <el-input  v-model="form.hosname"></el-input>
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="form.hoscode"></el-input>
      </el-form-item>
      <el-form-item label="医院网址">
        <el-input v-model="form.apiUrl"></el-input>
      </el-form-item>
      <el-form-item label="signKey">
        <el-input v-model="form.signKey"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="form.contactsName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.contactsPhone"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button type="primary" @click="save()">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{},
      rules: {
        hosname: [
          { required: true, message: '请输入医院名称', trigger: 'blur' },
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    save(){
      console.log(this.form)
    }
  }
}
</script>

<style>

</style>

