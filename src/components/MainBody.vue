<template>
  <div id="main-body">
    <div class="container is-fluid">
      <div class="columns is-gapless">
        <section>
          <aside class="column">
            <p class="notification is-warning">{{windowWidth}}</p>

          </aside>
        </section>
        <section class="column is-three-quarters">

          <p class="notification is-info">
            <code class="html">is-three-quarters</code>
          </p>
        </section>
      </div>
    </div>
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
