<template>
  <div class="search-prod-dialog">
    <fast-search @search="searchProds"
      :qc="search"
      :options="options"
      placeholder="输入条形码/商品名称等"
      class="margin-bottom-20">
    </fast-search>
    <product-card-group :products="products" :select="productId" class="pms-list"></product-card-group>
    <div class="center margin-bottom-20">
      未找到符合要求的商品？点击空白新增
      <el-button @click="blankAdd">空白新增</el-button>
      <el-button @click="continueAdd" :disabled="disabled" type="primary">选择并继续</el-button>
    </div>
  </div>
</template>

<script>
  import FastSearch from 'components/FastSearch'
  import ProductCardGroup from 'components/productCardGroup'
  import * as qc from '../../const'
  import api from '../products'

  export default {
    data () {
      return {
        search: {
          name: qc.FAST_SEARCH,
          value: ''
        },
        options: [
          {
            label: '快速查询',
            value: qc.FAST_SEARCH
          }, {
            label: '按商品名称查询',
            value: qc.NAME
          }, {
            label: '按条码查询',
            value: qc.BARCODE
          }
        ],
        products: [],
        productId: ''
      }
    },
    components: {
      FastSearch, ProductCardGroup
    },
    computed: {
      disabled () {
        return !this.productId
      }
    },
    methods: {
      searchProds () {
        let param = {
          [this.search.name]: this.search.value.trim()
        }
        api.searchProds(param).then(res => {
          this.products = res.data.products
        })
      },
      blankAdd () {
        let barcode = this.search.name === 'barcode' ? this.search.value : ''
        this.$emit('blankAdd', barcode)
      },
      continueAdd () {
        this.$emit('continueAdd', this.productId)
      }
    },
    mounted () {
      this.searchProds()
    }
  }
</script>

<style scoped lang="less">
  .center {
    text-align: center;
  }
  .pms-list {
    height: 448px;
    margin-left: 15px;
    overflow-y: auto;
  }
</style>