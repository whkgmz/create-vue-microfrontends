<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanghongkui
 * @Date: 2021-03-01 15:36:51
 * @LastEditTime: 2021-03-04 15:30:15
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to single-spa"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
