<template>
  <div id="table">
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
          <td><a><i class="fa fa-ellipsis-v"></i></a></td>
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
.test {
  color: #000;
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
</style>
