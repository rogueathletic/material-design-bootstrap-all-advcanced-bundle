<template>
  <Label :class="computedClass" :text="`fa-${icon}` | fonticon" androidElevation="2" />
</template>

<script>
import Vue from 'nativescript-vue'
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'

TNSFontIcon.debug = true
TNSFontIcon.paths = {
  'fa': './assets/fontawesome/all.min.css'
}
TNSFontIcon.loadCss()
Vue.filter('fonticon', fonticon)

const MDBIcon = {
  name: 'MDBIcon',
  props: {
    icon: String,
    far: Boolean,
    regular: Boolean,
    fal: Boolean,
    light: Boolean,
    fab: Boolean,
    brands: Boolean,
    size: String
  },
  computed: {
    computedClass() {
      return [
        this.far || this.regular ? 'far' :
          this.fal || this.light ? 'fal' :
            this.fab || this.brands ? 'fab' : 'fas',
        this.size && `fa-${this.size}`
      ]
    }
  }
}

export default MDBIcon
export { MDBIcon }
</script>

<style scoped lang="scss">
</style>
