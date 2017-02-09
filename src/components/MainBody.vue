<template>
  <!-- TODO: Either use isMobile functions globally or use css framework to be consistant  -->

  <div id="main-body">
    <div class="container is-fluid">

      <!-- Mobile Hero Header -->
      <section v-if="isMobile" class="hero is-dark is-hidden-tablet">
        <div class="hero-body">
          <div class="container has-text-centered">
            <figure class="image image-cropper is-128x128">
              <img src="http://lorempixel.com/400/400/cats/">
            </figure>
            <h1 class="title">
              Hillsboro (1234)
            </h1>
          </div>
        </div>
      </section>
<!-- TODO: separate breadcrumbs and Menu (dekstop and mobile) into own component -->
      <div class="columns">
        <!-- Desktop Menu -->
        <aside  class="column ">
          <MenuView v-if="isMobile==false" ></MenuView>
        </aside>

        <!-- Desktop Breadcrumbs -->
        <section class="column is-three-quarters">
          <article id="breadcrumb-header" class="columns ">
            <ul :class="{'mobile-breadcrumb-adjust': isMobile }" class="breadcrumb column ">
              <li><a href="#">BOX</a></li>
              <li><a class="is-active" href="#">Nike Inc.</a></li>
<!-- TODO: Make green circle larger than number -->
              <span class="is-pulled-right has-text-right is-hidden-tablet">
                <span id="notification-mobile" class="fa-stack icon">
                  <i class="testy fa fa-circle fa-stack-2x "></i>
                  <i class="fa fa-stack-1x fa-inverse char-overlay">3</i>
                </span>
                <i class="icon fa fa-bell-o"></i>
              </span>
            </ul>
            <span class="column has-text-right is-hidden-mobile">
              <i class="breadcrumb-icons fa fa-upload"></i>
              <i class="breadcrumb-icons fa fa-plus-square"></i>
              <i class="breadcrumb-icons fa fa-trash"></i>
            </span>
          </article>

          <!-- Mobile & Desktop Tables -->
          <div >
            <TableView  v-bind:windowWidth="windowWidth"></TableView>
          </div>

        </section>
      </div>
    </div>

  </div>
</template>

<script>
import MenuView from './MenuView'
import TableView from './TableView'

export default {
  name: 'main-body',
  props: ['windowWidth'],
  data (){
    return {
      width: 0,
      isMobile: false
    }
  },
  components: {
    MenuView,
    TableView
  },
  methods: {
    screenIsMobile (windowWidth){
      if(windowWidth < 768 ){
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  },
  created: function(){
    this.screenIsMobile(this.windowWidth);
  },
  watch: {
    windowWidth: function(val){
      this.screenIsMobile(val);
    }
  }
}
</script>

<style scoped>
#breadcrumb-header {
  padding-top: 1em;
}
.mobile-breadcrumb-adjust {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 2em;
  padding-right: 2em;
}

.breadcrumb-icons {
  padding-left: .5em;
}

ul.breadcrumb {
  list-style: none;
}
ul.breadcrumb li {
  display: inline;
}
ul.breadcrumb li a {
  color: #ccc;
  font-weight: 800;
}
ul.breadcrumb li+li:before {
  color: #ccc;
  content: "/\00a0";
  font-weight: 800;
}
ul.breadcrumb li a.is-active {
  color: #000;
  font-weight: 800;
}
ul.breadcrumb li a.is-active:after {
  color: #000;
  content: "/\00a0";
  font-weight: 800;
}
.image {
  margin: 0 auto;
  border: 3px solid #fff
}
.hero {
  z-index: 1;
}
.hero-body {
  margin: 1em;
  padding: 0;

}
.image-cropper {
    overflow: hidden;
    border-radius: 50%;
}
.title {
  padding-top: .25em;
  padding-bottom: 0;
  margin: 0;
}

#notification-mobile{
  color: #006400;
  bottom: .5em;
  left: .5em;
}


</style>
