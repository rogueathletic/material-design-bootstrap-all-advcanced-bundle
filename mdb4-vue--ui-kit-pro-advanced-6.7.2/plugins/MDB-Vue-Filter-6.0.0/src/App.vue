<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world msg="Filter gallery">
      <mdb-filter
          class="filter-gallery"
          :data="masonry"
          :col="5"
          drag
          masonry
          lightbox
          primary-color="#34495E"
        />
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import mdbFilter from 'mdb-filter';

export default {
  name: 'app',
  components: {
    HelloWorld,
    mdbFilter
  },
  data(){
    return {
      masonry: [
        { category: 'models', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(60).jpg"},
        { category: 'buildings', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(1).jpg" , lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg"},
        { category: 'food', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg"},
        { category: 'nature', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(30).jpg"},
        { category: 'buildings', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(2).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(2).jpg"},
        { category: 'models', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(65).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(65).jpg"},
        { category: 'models', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(63).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(63).jpg"},
        { category: 'nature', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(114).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(114).jpg"},
        { category: 'food', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(41).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(41).jpg"},
        { category: 'buildings', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(6).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(6).jpg"},
        { category: 'nature', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(115).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(115).jpg"},
        { category: 'models', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(64).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(64).jpg"},
        { category: 'buildings', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(5).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(5).jpg"},
        { category: 'food', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(45).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(45).jpg"},
        { category: 'food', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(46).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(46).jpg"},
        { category: 'nature', src: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(111).jpg", lightbox: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(111).jpg"}
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0 120px 0;
}

.filter-gallery {
  width: 80vw;
  margin: auto;
}
</style>
