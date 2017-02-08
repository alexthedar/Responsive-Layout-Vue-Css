<template>
  <div id="menu">
    <div class="container">
          <nav class="menu">
            <span class="nav-item is-fullwidth">
              <i class="fa fa-clock-o"></i><a>Recent</a>
            </span>
            <a>Files</a>
            <a>Folders</a>
            <a>Photos</a>
            <a>Notification</a>
            <a>Sign Out</a>
          </nav>

    </div>
  </div>
</template>

<script>
// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Menu from './components/Menu'
// import MainBody from './components/MainBody'


export default {
  name: 'menu',
  components: {
  }
}
</script>

<style scoped>
body {
  background: white;
}
a.menu-block:hover {
  background: #f5f7fa;
}

a.menu-block.is-active {
  background: #f5f7fa;
  color: #42afe3;
  i.fa {
    color: #42afe3;
  }
}
</style>
