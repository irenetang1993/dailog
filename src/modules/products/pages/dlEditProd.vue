<template>
  <!--此处一定要用v-if="visible"，不用或者用v-show="visible"都会导致编辑另一个商品的时候数据还是前一个商品的数据
  当用v-show的时候，-->
  <div v-show="visible">
    <el-dialog v-model="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      class="edit-prod-dialog"
      ref="editProdDialog">
      <div slot="title">
        <span class="el-dialog__title">新增/编辑商品</span>
        <div class="right">
          <el-button class="btn-icon-close" @click="close" size="small"></el-button>
        </div>
      </div>
      <el-form :model="product" label-width="100px" ref="form">
        <el-form-item label="商品名称">
          <el-input v-model="product.name"></el-input>
        </el-form-item>
        <el-form-item label="条形码">
          <el-input v-model="product.barcode"></el-input>
        </el-form-item>
      </el-form>
      <div class="center"><el-button @click="save" type="primary">保存并关闭</el-button></div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        modelVisible: false,
        product: {
          name: '',
          barcode: ''
        }
      }
    },
    methods: {
      open () {
        this.visible = true
      },
      close () {
        this.$refs.form.resetFields()
        this.visible = false
      },
      save () {

      }
    }
  }
</script>

<style>
  .edit-prod-dialog .el-dialog {
    width: 500px;
  }
  .center {
    text-align: center;
  }
</style>