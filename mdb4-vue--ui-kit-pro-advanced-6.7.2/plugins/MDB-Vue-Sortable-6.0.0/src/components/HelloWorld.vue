<template>
  <div class="hello">
    <div class="text-center">
      <img alt="MDBVue logo" src="../assets/mdbv-logo.png"/>
    </div>
    <h1 class="text-center">{{ msg }}</h1>
    <p class="text-center">
      For a guide and recipes on how to configure / customize this component, check out the <a href="https://mdbootstrap.com/plugins/vue/sortable/" target="_blank" rel="noopener">sortable docs</a>.
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
img {
  margin-top: 7vh;
  margin-bottom: 2vh;
}
h1 {
  margin-bottom: 2vh;
}
p {
  margin-bottom: 5vh;
}
a {
  color: #42b983;
}
</style>
