<template>
  <div id="navbar" >
    <nav class="nav">
      <div class="container is-fluid">
        <div class="nav-left">
          <a class="nav-item is-brand logo" href="#">
            <img  src="../assets/icons/box.png" alt="Platt logo">
            Platt Box
          </a>
        </div>

        <label class="nav-toggle" >
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div class="nav-right nav-menu" id="menu">
          <span class="nav-item is-flex-tablet is-marginless is-paddingless" >
            <p class="control has-icon has-icon-right is-marginless is-paddingless">
              <input class="input is-large search is-marginless " placeholder="Search Customers">
              <span class="icon ">
                <i class="fa fa-search"></i>
              </span>
            </p>
          </span>
        </div>
      </div>
    </nav>
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
      seen: false
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
.nav-toggle{
  color: white;
}
.nav, .search {
  background-color: #006400;
}
.search {
  border: 0px;
  box-shadow: 1px 1px 5px #555 inset;
  background-color: #015b01;
}
.logo, .fa-search {
  color: #fff;
  font-weight: 500;
}
</style>
