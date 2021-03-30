<template>
  <div class="hello">
    <img alt="MDBVue logo" src="../assets/mdbv-logo.png"/>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this component, check out the <a href="https://mdbootstrap.com/plugins/vue/file-upload/" target="_blank" rel="noopener">file upload docs</a>.
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
  margin-bottom: 5vh;

}
h1 {
  margin-bottom: 10vh;
}
h3 {
  margin: 40px 0 0;
}
p {
  margin-bottom: 10vh;
}
a {
  color: #42b983;
}
</style>
