<template>
  <div id="app">
    <div class="container">
      <HelloWorld msg="MDB Calendar" />
      <mdb-calendar />
    </div>
  </div>
</template>

<script>
import { mdbCalendar } from 'mdb-calendar'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    mdbCalendar,
    HelloWorld
  }
}
</script>

<style>
.container {
  margin: 50px auto;
}
</style>
