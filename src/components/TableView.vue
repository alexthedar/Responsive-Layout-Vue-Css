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
        <tr v-for="item in data">
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
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>

  </div>

</template>

<script type="text/x-template" id="file-menu">
  <div>
    file
  </div>
</script>

<script>
import data from '../assets/json/data.json'
import moment from 'moment'
// import Menu from './components/Menu'
// import MainBody from './components/MainBody'


export default {
  name: 'table',
  components: {
  },
  data() {
    return {
      data
    }
  },
  methods: {
    show (){
      console.log(this.data)
    },
    getDate (date){
      return moment.utc(date).format('MM-DD-YYYY')
    }
  }
}
</script>

<style>
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
    position: relative;
    display: inline-block;
}
input[type='checkbox'] {
visibility: hidden
}
input[type='checkbox']:checked ~ .toggled
{
    visibility: hidden;
}

input[type='checkbox'] ~ .toggled
{
    visibility: visible;
}
.toggled:focus .toggled {
    display: block;
}
.toggled {
    position: absolute;
    z-index: 1;
}

</style>
