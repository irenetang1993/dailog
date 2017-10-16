<template>
  <div>
    <el-dialog v-model="visible"
      :close-on-click-modal="false"
      :show-close="false"
      class="blank-add-dialog">
      <div slot="title">
        <span class="el-dialog__title">填写条码和型号</span>
        <div class="right">
          <el-button class="btn-icon-close" @click="close" size="small"></el-button>
        </div>
      </div>
      <el-form :model="data" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="条形码" prop="barcode">
          <el-input v-model="data.barcode"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="attribute">
          <el-input v-model="data.attribute"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <dl-edit-prod ref="editProdDl"></dl-edit-prod>
  </div>
</template>

<script>
  import dlEditProd from './dlEditProd'

  export default {
    data () {
      return {
        visible: false,
        data: {
          barcode: '',
          attribute: ''
        },
        rules: {
          barcode: {
            required: true,
            message: '请输入条形码'
          }
        }
      }
    },
    components: {
      dlEditProd
    },
    methods: {
      open (barcode) {
        this.data.barcode = barcode || ''
        this.visible = true
      },
      close () {
        this.$refs.form.resetFields()
        this.visible = false
      },
      confirm () {
        this.$refs.editProdDl.open()
        this.close()
      }
    }
  }
</script>

<style>
  .blank-add-dialog .el-dialog {
    width: 500px;
  }
</style>
