<template>
  <!-- TODO: Either use isMobile functions globally or use css framework to be consistant  -->

  <div id="navbar" >

    <nav class="nav">
      <div class="container is-fluid">
        <div class="nav-left">
          <a class="nav-item is-brand logo" href="#">
            <img  src="../assets/icons/box.png" alt="Platt logo">
            Platt Box
          </a>
        </div>

        <!--  Mobile Right Navbar Icons-->
        <div class="nav-item is-hidden-tablet" >
          <span  class="icon ">
            <i class="fa fa-search"></i>
          </span>
        </div>
        <div class="nav-item is-hidden-tablet" >
          <span @click="showMenu" class="icon ">
            <i class="fa fa-bars"></i>
          </span>
        </div>


        <!-- Desktop Search Navbr -->
        <div class="is-flex-tablet nav-right nav-menu" id="menu">
          <span class="nav-item  is-marginless is-paddingless" >
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
    <div v-if="isActive">
      <div @click="showMenu" class="mobile-menu-background"></div>
      <div id="mobile-menu-header">
        <span >Menu</span>
        <span @click="showMenu" class="is-pulled-right"><i class="icon is-medium fa fa-times"></i></span>
      </div>
      <div  class=" mobile-menu"><MenuView v-bind:windowWidth="windowWidth"></MenuView></div>
    </div>



      <!-- End of containing div -->
  </div>
</template>

<script>
import MenuView from './MenuView'

export default {
  name: 'navbar',
  props: ['windowWidth'],
  components: {
    MenuView
  },
  data (){
    return {
      isActive: false
    }
  },
  methods: {
    showMenu () {
      console.log('here')
    },
    showMenu(){
      console.log(this.isActive)
      this.isActive = !this.isActive
    }
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
.logo, .fa-search, .fa-bars {
  color: #fff;
  font-weight: 500;
}
.mobile-menu-background {
  z-index: 2500;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(10, 10, 10, 0.86);
}
.mobile-menu {
  padding: 1em;
  text-align: left;
  margin-top: 1em;
  width: 90%;
  right: 0;
  z-index: 3000;
  background-color: #fff;
  position: absolute;
  overflow: visible;
  box-sizing: border-box;
  display: block;
}
#mobile-menu-header {
  position: absolute;
  width: 90%;
  right: 0;
  top:0;
  z-index: 3000;
  padding: 5%;
  background-color: #006400;
}

#mobile-menu-header span{
  color: white;
  font-size: 140%;
  font-weight: 800;
}

</style>
