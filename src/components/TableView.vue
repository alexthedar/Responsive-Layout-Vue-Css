<template>
  <div id="table" >
    <table class="table">
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
          <td>
            <span v-if="item.type==='folder'">
              <i class="fa fa-folder-o"></i>
            </span>
            <span v-else-if="item.type==='.doc'">
              <i class="fa fa-file-word-o"></i>
            </span>
            <span v-else-if="item.type==='.zip'">
              <i class="fa fa-file-archive-o"></i>
            </span>
            <span v-else="item.type==='img'">
              <figure class="image is-24x24">
                <img class="image-cropper" :src="item.img">
              </figure>
            </span>
          </td>
          <td>{{item.name}}</td>
          <td class="size"><small>{{item.size}}</small></td>
          <td>{{getDate(item.date)}}</td>

          <!-- File Menu via ellipses -->
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
    
    <!-- File Menu Modal Overlay -->
    <div class="modal " v-bind:class="{'is-active': isActive }">
      <div class="modal-background" @click="showModal"></div>
      <div class="modal-content modal-input">
        <div class="card">
          <header class="card-header ">
            <p class=" card-header-title">Rename Folder</p>
          </header>
          <div class="card-content">
            <div class="content">
              <p class="control">
                <input class="input is-large" type="text" placeholder="Name">
              </p>
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

  </div>
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
      isMobile: false
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
.size {
  color: #A9A9A9;
}
.file-menu {
  position: absolute;
  background: #fff;
  right: 20px;
  border: 1px solid #000;
  width: 15em;
  z-index: 1000;
}
.modal-input {
  background: #f5f5f5;
  width: 30%;
}

</style>
