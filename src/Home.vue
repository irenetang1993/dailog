<template>
  <div class="wrapper">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import vHeader from 'components/Header'
  import vSidebar from 'components/Sidebar'

  export default {
    components: {
      vHeader, vSidebar
    }
  }
</script>
