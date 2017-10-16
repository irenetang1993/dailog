<template>
  <div>
    <template v-for="(prod, index) in products">
      <el-card class="prod-card">
        <el-radio v-model="selected" :label="prod.id" :key="index">
          <img :src="prod.gallery">
        </el-radio>
        <div>
          <li class="prod-name">{{ prod.brand }}{{ prod.name }}</li>
          <li>{{ prod.barcode }}</li>
          <div>
            <span>{{ prod.specification }}</span>
            <span class="right">{{ prod.sales_attribute_value }}</span>
          </div>
        </div>
      </el-card>
    </template>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        selected: this.select
      }
    },
    props: {
      products: {
        type: Array
      },
      select: {
        type: Number | String
      }
    },
    watch: {
      selected (value) {
        this.$parent.productId = value
      }
    }
  }
</script>

<style scoped lang="less">
  img {
    width: 100px;
    height: 100px;
    border: 1px solid #d9c2bf
  }

  .prod-card {
    width: 130px;
    height: 190px;
    display: inline-block;
  }

  li {
    list-style: none;
  }

  .prod-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100px;
    color: #0000ff;
  }

  .prod-card:first-child {
    margin-right: 13px;
  }

  .prod-card+.prod-card {
    margin-right: 13px;
    margin-left: 0;
  }
</style>

<style lang="less">
 .prod-card {
    .el-card__body {
      padding: 10px;
    }

    .el-radio__input {
      position: absolute;
      top: -7px;
      right: -7px;
    }
 }
</style>
