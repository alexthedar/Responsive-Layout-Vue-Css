<template>
  <div id="navbar">



    <!--  -->

    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item is-brand" href="#">
          <img src="../assets/icons/box.png" alt="Platt logo">
          Platt Box
        </a>
      </div>

      <div class="nav-center">
        <span class="nav-toggle icon nav-item is-mobile-only">
          <i class="fa fa-search"></i>
        </span>
      </div>

      <!-- Using a <label /> here -->
      <label class="nav-toggle" for="nav-toggle-state">
        <span></span>
        <span></span>
        <span></span>
      </label>


      <!-- This checkbox is hidden -->
      <input type="checkbox" id="nav-toggle-state" />

      <div class="nav-right nav-menu">
        <span class="nav-item is-flex-tablet">
          <p class="control has-icon has-icon-right">
            <input class="input " placeholder="Search Customers">
            <span class="icon">
              <i class="fa fa-search"></i>
            </span>
          </p>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Menu from './components/Menu'
// import MainBody from './components/MainBody'

export default {
  name: 'navbar',
  props: ['windowWidth'],
  data (){
    return {
      width: 0,
      searchPlaceholder:''
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
#nav-toggle-state {
  display: none;
}

#nav-toggle-state:checked ~ .nav-menu {
  display: block;
}
</style>
