<template>
  <WrapLayout :class="computedClass" :orientation="vertical && 'vertical'" :horizontalAlignment="align">
    <slot></slot>
  </WrapLayout>
</template>

<script>
const MDBBtnGroup = {
  name: 'MDBBtnGroup',
  props: {
    vertical: Boolean,
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    computedClass() {
      return [
        'mdb-btn-group'
      ]
    }
  }
}

export default MDBBtnGroup
export { MDBBtnGroup }
</script>

<style scoped>
.mdb-btn-group .mdb-btn {
  border-color: rgba(0,0,0,0.1);
  border-width: 1;
}
</style>
