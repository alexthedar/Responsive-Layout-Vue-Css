<template>
  <div id="table">
    <table class="table">
      <thead>
        <tr>
          <th><i></i></th>
          <th><abbr title="Name">Name</abbr></th>
          <th><abbr title="Size">Size</abbr></th>
          <th><abbr title="Date">Date</abbr></th>
          <th><i></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><i class="fa fa-folder-o"></i></th>
          <td>Folder Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-folder-o"></i></th>
          <td>Folder Name</td>
          <td class="size"><small>2.56mb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-folder-o"></i></th>
          <td>Folder Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-folder-o"></i></th>
          <td>Folder Name</td>
          <td class="size"><small>2.56mb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-word-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-word-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
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
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-archive-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-word-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-word-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
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
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
          <th><i class="fa fa-file-archive-o"></i></th>
          <td>File Name</td>
          <td class="size"><small>128kb</small></td>
          <td>04-14-2016</td>
          <td><i class="fa fa-ellipsis-v"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Menu from './components/Menu'
// import MainBody from './components/MainBody'


export default {
  name: 'table',
  components: {
  }
}
</script>

<style>
.image-cropper {
    overflow: hidden;
    border-radius: 50%;
}
th {
  padding: 0;
}
.fa-ellipsis-v {
  color: #A9A9A9;
}
td {
  font-weight: 500;
}
.size {
  color: #A9A9A9;
}
</style>
