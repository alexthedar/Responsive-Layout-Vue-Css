<template>
  <div id="main-body">
    <div class="container is-fluid">
      <div class="columns is-gapless">
        <aside class="column tempcolor">
          <Menu></Menu>
        </aside>
        <section class="column is-three-quarters">
            <article class="columns is-paddingless is-marginless is-hidden-mobile">
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
          <article>
            <p class="notification is-info">
              <code class="html">is-three-quarters</code>
            </p>
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
    Menu
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
