<template>
  <div id="main-body">
    <div class="container is-fluid">
      <div class="columns">
        <aside class="column ">
          <Menu></Menu>
        </aside>
        <section class="column is-three-quarters">
            <article id="breadcrumb-header" class="columns is-hidden-mobile">
              <ul class="breadcrumb column ">
                <li><a href="#">BOX</a></li>
                <li><a class="is-active" href="#">Nike Inc.</a></li>
              </ul>
              <span class="column has-text-right ">
                <i class="fa fa-upload"></i>
                <i class="fa fa-plus-square"></i>
                <i class="fa fa-trash"></i>
              </span>
            </article>
          <article id="table">
            <Table></Table>
          </article>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
// import Header from './components/Header'
// import Navbar from './components/Navbar'
import Menu from './Menu'
import Table from './Table'
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
    Menu,
    Table
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
#breadcrumb-header {
  padding-top: 1em;
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
.tempcolor {
  background-color: yellow;
}

</style>
