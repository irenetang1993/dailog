<template>
  <div>
    <el-select v-model="searchBy.name" placeholder="快速查询">
      <el-option v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input v-model="searchBy.value"
      @keyup.enter.native="search"
      :placeholder="placeholder">
    </el-input>
    <el-button type="primary" @click="search">查询</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      qc: {
        type: Object
      },
      options: {
        type: Array
      },
      placeholder: {
        type: String
      }
    },
    computed: {
      searchBy () {
        return this.qc
      }
    },
    methods: {
      search () {
        this.$emit('search')
      }
    }
  }
</script>

<style scoped lang="less">
  .el-input {
    width: 300px;
  }
  .el-select {
    width: 150px;
  }
</style>
