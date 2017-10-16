<template>
  <div>
    <el-table :data="products" class="margin-bottom-20">
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="barcode" label="条形码"></el-table-column>
      <el-table-column
        label="操作">
        <template scope="scope">
          <el-button @click="openEditProdDlg" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="openAddProdDlg" type="primary">新增商品</el-button>
    <dl-add-prod ref="addProdDl"></dl-add-prod>
    <dl-edit-prod ref="editProdDl"></dl-edit-prod>
    <!--引入dlAddProd弹框，由于<div v-show="visible">，所以能看到-->
  </div>
</template>
<script>
  import dlAddProd from './dlAddProd'
  import dlEditProd from './dlEditProd'
  import api from '../products'

  export default {
    data () {
      return {
        products: []
      }
    },
    components: {
      dlAddProd, dlEditProd
    },
    methods: {
      getProducts () {
        api.getProducts().then(res => {
          this.products = res.data.products
        })
      },
      openAddProdDlg () {
        this.$refs.addProdDl.open()
      },
      openEditProdDlg () {
        this.$refs.editProdDl.open()
      }
    },
    mounted () {
      this.getProducts()
    }
  }
</script>
