<template>
  <StackLayout ref="content">
    <AbsoluteLayout left="0" top="0" width="100%" height="100%">
      <slot></slot>
      <AbsoluteLayout width="100%" :height="contentHeight" :backgroundColor="maskOverlay">
        <MDRipple :rippleColor="wavesColor" width="100%" height="100%" />
      </AbsoluteLayout>
    </AbsoluteLayout>
  </StackLayout>
</template>

<script>
import Vue from 'nativescript-vue'
import RipplePlugin from 'nativescript-material-ripple/vue'
Vue.use(RipplePlugin)

const MDBMask = {
  name: 'MDBMask',
  props: {
    darkWaves: Boolean,
    overlay: {
      type: String,
      default: 'light'
    }
  },
  computed: {
    maskOverlay() {
      if (this.overlay === 'strong') return 'rgba(0,0,0,.7)'
      if (this.overlay === 'light') return 'rgba(0,0,0,.3)'
      if (this.overlay === 'slight') return 'rgba(0,0,0,.1)'
    },
    wavesColor() {
      return this.darkWaves ? 'rgba(0,0,0,.2)' : 'rgba(255,255,255,.4)'
    }
  },
  data() {
    return {
      contentHeight: 0,
      calculateHeightInterval: null
    }
  },
  beforeMount() {
    this.calculateHeightInterval = setInterval(() => {
      if (this.$refs.content) {
        this.contentHeight = this.$refs.content.nativeView.getActualSize().height
        if (this.contentHeight > 0) clearInterval(this.calculateHeightInterval)
      }
    }, 300)
  },
  beforeDestroy() {
    clearInterval(this.calculateHeightInterval)
  }
}

export default MDBMask
export { MDBMask }
</script>

<style scoped>
</style>

