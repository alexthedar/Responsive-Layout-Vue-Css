<template>
  <div id="table">
    <div class="facebook"> Facebook Content</div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
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
          <td :index="index" @click="showFileMenu(index)" ><i  class="fa fa-ellipsis-v"></i>
            <div v-if="show === parseInt(index)" class='file-menu'>
              <div class="menu">
                <ul class="menu-list">
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

  </div>

</template>

<script>
import data from '../assets/json/data.json'
import moment from 'moment'
import FileMenu from './FileMenu'
// import MainBody from './components/MainBody'


export default {
  name: 'table',
  props: ['windowWidth'],
  components: {
    FileMenu
  },
  data() {
    return {
      data,
      show: '',
      selected: 'Home',
    }
  },
  methods: {
    getDate (date){
      return moment.utc(date).format('MM-DD-YYYY')
    },
    showFileMenu(index){
      this.show === index? this.show = '' : this.show = index;
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
</style>
