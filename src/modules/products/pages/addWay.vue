<template>
  <div>
    <el-row>
      <el-col>
        <h3>新增单品</h3>
        <div class="center">
          <li>方式一：匹配乐来商品库，可快速添加商品信息<span class="recommand">推荐</span></li>
          <li><el-button type="primary" @click="fastAdd">快速新增</el-button></li>
          <li>方式二：手工填写空白信息</li>
          <li><el-button @click="blankAdd">空白新增</el-button></li>
        </div>
      </el-col>
    </el-row>
    <div class="division"></div>
    <el-row>
      <el-col>
        <h3>批量新增</h3>
        <div class="center">
          <li>方式一：批量导表可一次性上传多个商品信息</li>
          <li><el-button @click="importAdd">导入</el-button></li>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as cst from '../../const'

  export default {
    methods: {
      blankAdd () {
        this.$emit('blankAdd')
      },
      importAdd () {
        this.$emit('importAdd')
      },
      fastAdd () {
        // addWay组件是插入到ref="addProdDl"的el-dialog的body里，
        // 所以this.$parent是el-dialog，this.$parent.$parent是dlAddProd组件
        this.$parent.$parent.showTo = cst.SEARCH_PROD_VISIBLE
      }
    }
  }
</script>

<style scoped lang="less">
  .center {
    text-align: center;
  }
  li {
    list-style: none;
  }
  li+li {
    margin-bottom: 20px;
  }
  li:first-child {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .recommand {
    border: 1px solid #ff0000;
    color: #fff;
    font-size: 10px;
    background-color: #ff0000;
    border-radius: 4px;
  }
  .division {
    border: none;
    border-top: 1px solid #d9c2bf;
    margin-bottom: 20px;
  }
</style>
