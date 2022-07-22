<template>
  <div id="app">
     <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view>
          <!-- 这里是会被缓存的视图组件，比如 首页！ -->
        </router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
