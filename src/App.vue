<template>
  <div id="app" >

    <Navbar v-bind:windowWidth="windowWidth"></Navbar>
    <MainBody v-bind:windowWidth="windowWidth"></MainBody>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MainBody from './components/MainBody.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    MainBody
  },
  data: function() {
    return {
      windowWidth: 0,
      windowHeight: 0,
    }
  },

  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);

      //Init
      this.getWindowWidth()
      this.getWindowHeight()
    })

  },

  methods: {
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
      },

      getWindowHeight(event) {
        this.windowHeight = document.documentElement.clientHeight;
      }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  z-index:0;
}
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
</style>
