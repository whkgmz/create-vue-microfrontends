<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanghongkui
 * @Date: 2021-03-01 15:36:20
 * @LastEditTime: 2021-03-04 15:31:23
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/app1">点我去fashion应用</router-link> |
      <router-link to="/app2">点我去giao应用</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
