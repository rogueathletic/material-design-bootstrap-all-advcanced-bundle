<template>
  <StackLayout>
    <StackLayout>
      <WrapLayout :horizontalAlignment="togglerAlign">
        <MDBBtn v-if="toggler && !banner" :text="toggler" @tap.native="toggleContent" :mdbColor="togglerMDBColor" />
      </WrapLayout>
    </StackLayout>
    <StackLayout ref="content" width="100%" class="mdb-content-item">
      <slot></slot>
    </StackLayout>
    <StackLayout v-if="toggler && banner">
      <Label v-if="toggle || !hideAll" :text="toggler" @tap="toggleContent" :color="togglerColor" :horizontalAlignment="togglerAlign" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import { MDBBtn } from '../Components/Button'

const MDBCollapse = {
  name: 'MDBCollapse',
  components: {
    MDBBtn
  },
  props: {
    toggler: {
      type: String,
      default: 'Toggle'
    },
    togglerMDBColor: {
      type: String,
      default: 'primary'
    },
    active: Boolean,
    banner: Boolean,
    hideAll: Boolean,
    togglerColor: {
      type: String,
      default: 'blue'
    },
    togglerAlign: {
      type: String,
      default: 'left'
    },
    speed: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      toggle: this.active,
      content: null,
      animateInterval: null,
      contentHeight: 0,
      speedFactor: 5,
      animationWorks: false
    }
  },
  mounted() {
    if (this.speed === 'fast') this.speedFactor = 10
    else if (this.speed === 'slow') this.speedFactor = 2
    // timeout is neccessary because of nativescript bug
    setTimeout(() => {
      this.content = this.$refs.content
      this.contentHeight = this.content.nativeView.getActualSize().height
      if (!this.active) {
        this.content.nativeView.style.height = 0
        this.content.nativeView.style.opacity = 0
      }
    }, 300)
  },
  methods: {
    mdbCollapseAnimation(direction, speed) {
      if (!this.animationWorks) {
        this.toggle = !this.toggle
        let step = 0
        let opacityStep = 0
        let opacitySpeed = 1 / (this.contentHeight / speed)
        this.animateInterval = setInterval(() => {
          this.animationWorks = true
          step += speed
          opacityStep += opacitySpeed
          if (direction === 'enter') {
            this.content.nativeView.style.height = step
            this.content.nativeView.style.opacity = opacityStep
            if (step >= this.contentHeight && step > 0) {
              this.animationWorks = false
              clearInterval(this.animateInterval)
            } 
          } else {
            this.content.nativeView.style.height = this.contentHeight - step
            this.content.nativeView.style.opacity = 1 - opacityStep
            if (step >= this.contentHeight - 1) {
              this.content.nativeView.style.height = 0
              this.animationWorks = false
              clearInterval(this.animateInterval)
            }
          }
        }, 5)
      }
    },
    toggleContent() {
      if (this.toggle) {
        this.mdbCollapseAnimation('leave', this.speedFactor)
      } else {
        this.mdbCollapseAnimation('enter', this.speedFactor)
      }
    }
  }
}

export default MDBCollapse
export { MDBCollapse }
</script>

<style scoped>
.mdb-content-item{
  transition: all 0.3s;
}
</style>
