<template>
  <Label
    @tap="toggleTooltip"
    @loaded="onLoaded"
  />
</template>

<script>
const ToolTip = require('nativescript-tooltip').ToolTip

const MDBTooltip = {
  name: 'MDBTooltip',
  props: {
    position: {
      type: String,
      default: 'top'
    },
    tooltipContent: {
      type: String,
      default: 'Example text'
    }
  },
  data() {
    return {
      toggle: false,
      tip: null
    }
  },
  methods: {
    onLoaded(data) {
      this.tip = new ToolTip(data.object, {
        text: this.tooltipContent,
        position: this.position,
        backgroundColor: '#CCCCCC',
        textColor: '#000000',
        style: 'TooltipLayoutStyle'
      })
    },
    toggleTooltip() {
      if (this.toggle) {
        this.hideTooltip()
      } else {
        this.loadTooltip()
      }
    },
    loadTooltip() {
      this.tip.show()
      this.toggle = true
    },
    hideTooltip() {
      this.tip.hide()
      this.toggle = false
    }
  }
}

export default MDBTooltip
export { MDBTooltip }
</script>

<style scoped>
</style>
