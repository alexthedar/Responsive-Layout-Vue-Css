<template>
  <!-- TODO: Either use isMobile functions globally or use css framework to be consistant  -->

  <div id="menu">
    <aside class="menu">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64 image-cropper">
            <img src="http://lorempixel.com/250/250/people/" class="rounded"/>
          </p>
        </figure>
        <div class="media-content">
          <div class="content company">
            <span><strong>Nike Inc.</strong></span>
            <small class="email"><i>emailaddress@nike.com</i></small>
          </div>
        </div>
        <div class="media-right">
          <a>
            <i class="fa fa-cog"></i>
          </a>
        </div>
      </article>
      <hr />
      <ul class="menu-list">
        <li><a><i class="icon fa fa-clock-o"></i><span>Recent</span></a></li>
        <li><a><i class="icon fa fa-file-o"></i><span>Files</span></a></li>
        <li><a><i class="icon fa fa-folder"></i><span>Folders</span></a></li>
        <li><a><i class="icon fa fa-file-image-o"></i><span>Photos</span></a></li>
        <li><a><i class="icon fa fa-bell-o"></i>
          <span>Notification</span>
          <span class="fa-stack icon">
            <i class="fa fa-circle fa-stack-2x "></i>
            <i class="fa fa-stack-1x fa-inverse char-overlay">3</i>
          </span></a>
        </li>
        <li><a><i class="icon fa fa-sign-out"></i><span>Sign Out</span></a></li>
      </ul>
    </aside>
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
.media {
  padding-top: .5em;
}
.menu-list a:hover {
  border-radius: 25px;
}
.menu-list span {
  padding-left: 2.5em;
}
.menu-list .fa {
  padding-left: .5em;
}
.image-cropper {
    overflow: hidden;
    border-radius: 50%;
}
.fa-cog{
  color: #ccc;
}
.fa-cog:hover{
  color: #000;
}
.content {
  padding-top: 1em;
}
.email {
position: relative;
top: -.5em;
}
.fa-circle {
  color: #006400;
}
.char-overlay {
  font-size: 100%;
  font-weight: bold;
}

</style>
