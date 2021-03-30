<template>
  <div id="app">
    <HelloWorld msg="MDB Drag & Drop File Upload">
      <file-upload multiple/>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FileUpload from 'mdb-file-upload';

export default {
  name: 'app',
  components: {
    HelloWorld,
    FileUpload
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
