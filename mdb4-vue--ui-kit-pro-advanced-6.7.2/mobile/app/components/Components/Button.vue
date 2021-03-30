<template>
  <Button 
    :class="computedClass" 
    :backgroundColor="computedBackground"
    :borderRadius="$isIOS && !btnGroup ? '2' : ''" 
    :color="computedColor" fontSize="11" :padding="$isIOS && '10'" 
    :margin="$isIOS && !btnGroup ? '2' : '0'" 
    class="mdb-font-bold" androidElevation="4" 
    v-shadow="$isIOS && { elevation: 4, bgcolor: '#006968', shadowOffset: -0.1 }">{{text && textLeft ? text + '  ' : null}}{{icon && `fa-${icon}` | fonticon}}{{icon && text && !textLeft ? '  ' : null}}{{text && !textLeft ? text : null}}{{dropdown && text ? '  ' : null}}{{dropdown && `fa-caret-down` | fonticon}}</Button>
</template>

<script>
import Vue from 'nativescript-vue'
import NSVueShadow from 'nativescript-vue-shadow'
import { AndroidData, ShapeEnum } from 'nativescript-vue-shadow'
Vue.use(NSVueShadow)

const MDBBtn = {
  name: 'MDBBtn',
  props: {
    mdbColor: String,
    icon: String,
    far: Boolean,
    regular: Boolean,
    fal: Boolean,
    light: Boolean,
    fab: Boolean,
    brands: Boolean,
    btnGroup: Boolean,
    text: String,
    textLeft: Boolean,
    dropdown: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    computedClass() {
      return [
        'mdb-btn',
        this.dropdown && 'fa fas',
        this.icon && 'fa',
        this.icon ? 
          this.far || this.regular ? 'far' :
            this.fal || this.light ? 'fal' :
              this.fab || this.brands ? 'fab' : 'fas' 
          : false,
      ]
    },
    computedBackground() {
      if (this.mdbColor === 'primary') return '#4285f4'
      if (this.mdbColor === 'primary-dark') return '#0d47a1'
      if (this.mdbColor === 'danger') return '#ff3547'
      if (this.mdbColor === 'danger-dark') return '#CC0000'
      if (this.mdbColor === 'success') return '#00c851'
      if (this.mdbColor === 'success-dark') return '#007E33'
      if (this.mdbColor === 'warning') return '#ffbb33'
      if (this.mdbColor === 'warning-dark') return '#FF8800'
      if (this.mdbColor === 'info') return '#33b5e5'
      if (this.mdbColor === 'info-dark') return '#0099CC'      
      if (this.mdbColor === 'default') return '#2BBBAD'
      if (this.mdbColor === 'default-dark') return '#00695c'
      if (this.mdbColor === 'secondary') return '#aa66cc'
      if (this.mdbColor === 'secondary-dark') return '#9933CC'
      else return '#fff'
    },
    computedColor() {
      let checkColor = ['primary', 'danger', 'success', 'warning', 'info', 'default', 'secondary', 'primary-dark', 'danger-dark', 'success-dark', 'warning-dark', 'info-dark', 'default-dark', 'secondary-dark'].includes(this.mdbColor)
      if (checkColor) return 'white'
      else return 'black'
    }
  }
}

export default MDBBtn
export { MDBBtn }
</script>

<style scoped>
</style>
