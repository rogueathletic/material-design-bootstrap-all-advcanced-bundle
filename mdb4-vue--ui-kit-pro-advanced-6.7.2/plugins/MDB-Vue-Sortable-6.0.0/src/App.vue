<template>
  <div id="app">
    <div class="container">
      <HelloWorld msg="MDB Sortable" />
      <mdb-list-group>
        <mdb-sortable :list="list">
          <mdb-list-group-item v-for="element in list" :key="element.id" :active="element.active">
            {{ element.name }}
          </mdb-list-group-item>
        </mdb-sortable>
      </mdb-list-group>
    </div>
  </div>
</template>

<script>
import mdbSortable from 'mdb-sortable'
import HelloWorld from './components/HelloWorld.vue'
import { mdbListGroup, mdbListGroupItem } from 'mdbvue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    mdbSortable,
    mdbListGroup,
    mdbListGroupItem
  },
  data() {
    return {
      list: [
        { name: "Item 1", id: 0, active: true },
        { name: "Item 2", id: 1 },
        { name: "Item 3", id: 2 },
        { name: "Item 4", id: 3 },
        { name: "Item 5", id: 4 },
        { name: "Item 6", id: 5 },
        { name: "Item 7", id: 6 },
        { name: "Item 8", id: 7 }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 50px auto;
}
</style>
