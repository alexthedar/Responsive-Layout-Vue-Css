<template>
  <div id="main-body">
{{windowWidth}}

  </div>
</template>

<script>
// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Menu from './components/Menu'
// import MainBody from './components/MainBody'

export default {
  name: 'main-body',
  props: ['windowWidth'],
  data (){
    return {
      width: 0,
    }
  },
  components: {
  },
  methods: {
  },
  created: function(){
  },
  watch: {
  }
}
</script>

<style scoped>

</style>
