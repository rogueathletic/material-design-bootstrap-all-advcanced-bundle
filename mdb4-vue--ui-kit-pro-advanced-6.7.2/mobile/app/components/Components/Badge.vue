<template>
  <Button :class="computedClass" :text="icon && `fa-${icon}` | fonticon" fontSize="10" class="mdb-font-bold" androidElevation="2" v-shadow="$isIOS && { elevation: 2, bgcolor: '#006968', shadowOffset: -0.1 }" />
</template>

<script>
import Vue from 'nativescript-vue'
import NSVueShadow from 'nativescript-vue-shadow'
import { AndroidData, ShapeEnum } from 'nativescript-vue-shadow'
Vue.use(NSVueShadow)

const MDBBadge = {
  name: 'MDBBadge',
  props: {
    mdbColor: String,
    pill: Boolean,
    icon: String,
    far: Boolean,
    regular: Boolean,
    fal: Boolean,
    light: Boolean,
    fab: Boolean,
    brands: Boolean
  },
  computed: {
    computedClass() {
      return [
        'mdb-badge',
        this.mdbColor && `mdb-badge-colorful mdb-badge-${this.mdbColor}`,
        this.pill && 'mdb-badge-pill',
        this.icon && 'fa',
        this.icon ? 
          this.far || this.regular ? 'far' :
            this.fal || this.light ? 'fal' :
              this.fab || this.brands ? 'fab' : 'fas' 
          : false
      ]
    }
  }
}

export default MDBBadge
export { MDBBadge }
</script>

<style scoped lang="scss">
@import "../../assets/scss/mdb-colors.scss";

.mdb-badge {
  margin: 2 3;
  border-color: transparent;
  text-transform: none;
  border-width: 1;
  border-radius: 2;
  height: 18;
  padding: 0; }
.mdb-badge-pill {
  border-radius: 10; }
.mdb-badge-colorful {
  color: #fff; }
.mdb-badge-primary {
  background-color: $mdb-primary-color; }
.mdb-badge-danger {
  background-color: $mdb-danger-color }
.mdb-badge-success {
  background-color: $mdb-success-color; }
.mdb-badge-warning {
  background-color: $mdb-warning-color; }
.mdb-badge-info {
  background-color: $mdb-info-color; }
.mdb-badge-default {
  background-color: $mdb-default-color; }
.mdb-badge-secondary {
  background-color: $mdb-secondary-color; }
</style>
