<template>
  <div id="table">
    <div class="facebook"> Facebook Content</div>
    <table class="table">
      <thead>
        <tr>
          <th><i></i></th>
          <th class="test"><abbr title="Name">Name<i class="fa fa-caret-up"></i></abbr></th>
          <th><abbr title="Size">Size<i class="fa fa-caret-down"></i></abbr></th>
          <th><abbr title="Date">Date<i class="fa fa-caret-down"></i></abbr></th>
          <th><i></i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data">
          <th >
            <span v-if="item.type==='folder'"><i class="fa fa-folder-o"></i></span>
            <span v-else-if="item.type==='.doc'"><i class="fa fa-file-word-o"></i></span>
            <span v-else-if="item.type==='.zip'"><i class="fa fa-file-archive-o"></i></span>
            <span v-else="item.type==='img'">
              <figure class="image is-24x24">
                <img class="image-cropper" :src="item.img">
              </figure>
            </span>
          </th>
          {{item}}
        </tr>

        <tr>
          <th></th>
          <td>Folder Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><label class="file-menu" for="row1"><i  class="fa fa-ellipsis-v"></i></label>
            <input id="row1" type="checkbox" class="toggle"></input>

            <div class=" toggled">
                Text that be hidden dynamically!
            </div>
          </td>
        </tr>
        <tr>
          <th><i class="fa fa-folder-o"></i></th>
          <td>Folder Name</td>
          <td class="size"><small>2.56mb</small></td>
          <td>04-14-2016</td>
          <td><a @click="show"><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th><i class="fa fa-folder-o"></i></th>
          <td>Folder Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th><i class="fa fa-folder-o"></i></th>
          <td>Folder Name</td>
          <td class="size"><small>2.56mb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-word-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-word-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th>
            <figure class="image is-24x24">
              <img class="image-cropper" src="http://lorempixel.com/250/250/sports/">
            </figure>
          </th>
          <td>File Name</td>
          <td class="size"><small>2.56mb</small></td>
          <td>04-14-2016</td>
          <td><a class="file-menu"><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-archive-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-word-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-word-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th>
            <figure class="image is-24x24">
              <img class="image-cropper" src="http://lorempixel.com/250/250/cats/">
            </figure>
          </th>
          <td>File Name</td>
          <td class="size"><small>2.56mb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-archive-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
        </tr>
      </tbody>
    </table>
    <div class="box" >
    <p>One</p>
    <span><a href="#top">Close</a></span>
</div>
  </div>

</template>

<script type="text/x-template" id="file-menu">
  <div>
    file
  </div>
</script>

<script>
import data from '../assets/json/data.json'
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
