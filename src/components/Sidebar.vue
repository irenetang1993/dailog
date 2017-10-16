<template>
  <div class="sidebar">
    <el-menu :collapse="false" class="el-menu-vertical-demo" router>
      <el-menu-item index="1"><i class="el-icon-menu"></i>商品列表</el-menu-item>
    </el-menu>
  </div>  
</template>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 180px;
    height: 100%;
    top: 70px;
  }
  .sidebar > ul {
    height: 100%;
  }
  .sidebar img {
    vertical-align: middle;
    margin-right: 10px;
    margin-top: -4px;
  }
</style>