<template>
  <div class="hello">
    <img alt="MDBVue logo" src="../assets/mdbv-logo.png"/>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this component, check out the <a href="https://mdbootstrap.com/plugins/vue/filter/" target="_blank" rel="noopener">filter plugin docs</a>.
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  width: 80vw;
  margin: auto;
}

.section-header {
  color: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 40px 0 20px 0;
  text-align: left;
  font-size: 28px;
}

.demo-section {
  margin-bottom: 40px;
}
</style>
