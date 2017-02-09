<template>
  <div>
  <!-- TODO: place mobile and desktop table into separate components or find a nicer way to make this mobile freindly -->
  <!-- TODO: Either use isMobile functions globally or use css framework to be consistant  -->

  <!-- Desktop Table -->
  <table v-if="!isMobile" class="table">
    <thead>
      <tr>
        <th></th>
  <!-- TODO: Make carets flip and click sorts table -->
        <th ><abbr title="Name">Name<i class="fa fa-caret-up"></i></abbr></th>
        <th><abbr title="Size">Size<i class="fa fa-caret-down"></i></abbr></th>
        <th><abbr title="Date">Date<i class="fa fa-caret-down"></i></abbr></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data">
        <td><span v-if="item.type==='folder'"><i class="fa fa-folder-o"></i></span>
          <span v-else-if="item.type==='.doc'"><i class="fa fa-file-word-o"></i></span>
          <span v-else-if="item.type==='.zip'"><i class="fa fa-file-archive-o"></i></span>
          <span v-else="item.type==='img'">
            <figure class="image is-24x24">
              <img class="image-cropper" :src="item.img">
            </figure>
          </span>
        </td>
        <td>{{item.name}}</td>
        <td class="size"><small>{{item.size}}</small></td>
        <td>{{getDate(item.date)}}</td>

        <!-- Desktop File Menu via ellipses -->
        <td :index="index" @click="showFileMenu(index)" ><i  class="fa fa-ellipsis-v"></i>
          <div v-if="show === parseInt(index)" class='file-menu'>
            <div class="menu">
              <ul class="menu-list">
  <!-- TODO: Make Modal dynamic and respond to individual links -->
                <li @click="showModal"><a >Rename</a></li>
                <li @click="showModal"><a>Move</a></li>
                <li @click="showModal"><a>Copy</a></li>
                <li @click="showModal"><a>Comment</a></li>
                <li @click="showModal"><a>Attach to Customer</a></li>
                <li @click="showModal"><a>Delete</a></li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- End Desktop Table -->

  <!-- Mobile Search -->
    <div v-if="isMobile" id="mobile-search">
      <p class="control has-icon has-icon-right">
        <input class="input is-medium" type="text" placeholder="Looking For">
        <span class="icon is-medium">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>

    <!-- Mobile Table Header -->
    <div v-if="isMobile" class="tabs is-centered ">
      <ul @click="tabClicked">
        <li><a :id="1">Name</a></li>
        <li><a :id="2">Size</a></li>
        <li><a :id="3">Date</a></li>
      </ul>
    </div>

    <!-- Mobile Table -->
    <table v-if="isMobile" class="table ">
      <tbody>
        <tr v-for="(item, index) in data">
          <td >
            <span v-if="item.type==='folder'"><i class="fa fa-folder-o"></i></span>
            <span v-else-if="item.type==='.doc'"><i class="fa fa-file-word-o"></i></span>
            <span v-else-if="item.type==='.zip'"><i class="fa fa-file-archive-o"></i></span>
            <span v-else="item.type==='img'">
              <figure class="image is-24x24"><img class="image-cropper" :src="item.img"></figure>
            </span>
          </td>
          <td class="has-text-left">{{item.name}}</td>
          <td v-if="parseInt(activeTab) === 2" class="size"><small>{{item.size}}</small></td>
          <td v-if="parseInt(activeTab) === 3">{{getDate(item.date)}}</td>

          <!-- Mobile File Menu via ellipses -->
          <td :index="index" @click="showFileMenu(index)" ><i  class=" fa fa-ellipsis-v" ></i>
            <div v-if="show === index" class=''>
              <div class="menu">
                <ul v-if="!isMobile" class="file-menu is-overlay menu-list">
<!-- TODO: Make Modal dynamic and respond to individual links -->
                  <li @click="showModal"><a >Rename</a></li>
                  <li @click="showModal"><a>Move</a></li>
                  <li @click="showModal"><a>Copy</a></li>
                  <li @click="showModal"><a>Comment</a></li>
                  <li @click="showModal"><a>Attach to Customer</a></li>
                  <li @click="showModal"><a>Delete</a></li>
                </ul>
<!-- TODO: Temp to disable modal on mobile -->
                <ul v-else-if="isMobile" class="menu-list file-menu-mobile">
                  <li class="mobile-file-menu-header">
                    <div class="columns is-mobile">
                      <div class="column is-3 icon is-medium "><i class="fa fa-file-word-o"></i></div>
                      <div class="column mobile-file-menu-header-name">
                        File Name.doc
                        <p><small><i>box/customername/</i></small></p>
                      </div>
                    </div>
                  </li>
                  <li><a>Rename</a></li>
                  <li><a>Move</a></li>
                  <li><a>Copy</a></li>
                  <li><a>Comment</a></li>
                  <li><a>Attach to Customer</a></li>
                  <li><a>Delete</a></li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End Mobile Table -->

    <!-- File Menu Modal Overlay -->
    <div class="modal " v-if="isActive" v-bind:class="{'is-active': isActive }">
      <div class="modal-background" @click="showModal"></div>
      <div class="modal-content modal-input">
        <div class="card">
          <header class="card-header ">
            <p class=" card-header-title">Rename Folder</p>
          </header>
          <div class="card-content">
            <div class="content">
              <p class="control"><input class="input is-large" type="text" placeholder="Name"></p>
            </div>
          </div>
          <footer class="card-footer">
            <a class="is-success card-footer-item">CANCEL</a>
            <a class="card-footer-item">RENAME</a>
          </footer>
          <button class="modal-close" @click="showModal"></button>
        </div>
      </div>
    </div>

  </div>  <!-- container div for template -->
</template>

<script>
import data from '../assets/json/data.json'
import moment from 'moment'

export default {
  name: 'table',
  props: ['windowWidth'],
  components: {
  },
  data() {
    return {
      data,
      show: '',
      isActive: false,
      isMobile: false,
      activeTab: '1'
    }
  },
  methods: {
    getDate (date){
      return moment.utc(date).format('MM-DD-YYYY')
    },
    showFileMenu(index){
      this.show === index? this.show = '' : this.show = index;
    },
    showModal(){
      console.log(this.isActive)
      this.isActive = !this.isActive
    },
    screenIsMobile (windowWidth){
      if(windowWidth < 768 ){
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    tabClicked(e){
      this.activeTab = e.target.id
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
#mobile-search input {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
}
#mobile-search{
  padding: 1em;
}
.image-cropper {
    overflow: hidden;
    border-radius: 50%;
}
.fa-ellipsis-v {
  color: #A9A9A9;
}
.fa-ellipsis-v:hover {
  color: #000;
}

td {
  font-weight: 500;
}

tr:hover {
  background-color: blue;
}
.size {
  color: #A9A9A9;
}

.file-menu {
  position: absolute;
  background: #fff;
  right: 10%;;
  border: 1px solid #000;
  width: 15em;
}
.modal-input {
  background: #f5f5f5;
  width: 30%;
}
.file-menu-mobile {
  border-top: 1px solid green;
  border-bottom: 1px solid green;
  box-shadow: 0 2px 10px 5px #ccc;
  line-height: 2em;
  position: absolute;
  background: #f5f5f5;
  width: 100%;
  right: 0;
  left: 0;
  z-index: 1000;
}

.file-menu-mobile li {
  border-bottom: 1px solid #ccc;
}

.mobile-file-menu-header {
  padding: 1.5em;
}
.mobile-file-menu-header .icon {
  padding-top: .75em;;
}
.mobile-file-menu-header-name {
}
.mobile-file-menu-header-name p {
  font-weight: 800;
  color: #ccc;
}

</style>
