<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanghongkui
 * @Date: 2021-03-01 15:40:03
 * @LastEditTime: 2021-03-04 16:38:30
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your APP1 "/>
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
