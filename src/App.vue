<template>
  <div id="app">
    <Navbar></Navbar>
    <MainBody></MainBody>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'
import MainBody from './components/MainBody.vue'
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Navbar,
    MainBody
  }
}
</script>

<style>
</style>
