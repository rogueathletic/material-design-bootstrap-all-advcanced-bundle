<template>
  <StackLayout margin="3" androidElevation="4" v-shadow="$isIOS && { elevation: 4, bgcolor: '#006968', shadowOffset: -0.1 }" borderRadius="3" background="white">
    <GridLayout ref="content">
      <Image v-if="img" :src="img" :height="imgHeight" width="100%" stretch="aspectFill" borderTopLeftRadius="3" borderTopRightRadius="3" />
      <AbsoluteLayout v-if="img" :left="0" :top="0" width="100%" :height="contentHeight">
        <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
      </AbsoluteLayout>
    </GridLayout>
    <AbsoluteLayout borderRadius="3" v-if="imgOverlay" width="100%" height="100%" ref="imgOverlayContent">
      <Image :src="imgOverlay" width="100%" :height="height" stretch="aspectFill" borderRadius="3" />
      <Label width="100%" :height="height" class="mdb-rgba-black-strong" borderRadius="3" />
      <AbsoluteLayout :left="0" :top="0" width="100%" :height="imgOverlayContentHeight">
        <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
      </AbsoluteLayout>
      <StackLayout padding="10" width="100%">
        <slot></slot>
      </StackLayout>
    </AbsoluteLayout>
    <WrapLayout v-else padding="10">
      <Label width="100%" v-if="title" :text="title" fontSize="18" class="mdb-font-bold" :color="titleColor" paddingBottom="8" :textAlignment="align" />
      <Label width="100%" v-if="text" textWrap="true" :color="textColor" :text="text" :textAlignment="align" />
      <slot></slot>
    </WrapLayout>
  </StackLayout>
</template>

<script>
import Vue from 'nativescript-vue'
import NSVueShadow from 'nativescript-vue-shadow'
import { AndroidData, ShapeEnum } from 'nativescript-vue-shadow'
Vue.use(NSVueShadow)

const MDBCard = {
  name: 'MDBCard',
  props: {
    img: String,
    title: String,
    text: String,
    imgOverlay: String,
    titleColor: {
      type: String,
      default: 'black'
    },
    textColor: {
      type: String,
      default: '#888'
    },
    align: {
      type: String,
      default: 'left'
    },
    imgHeight: {
      type: String,
      default: '150'
    },
    height: {
      type: String,
      default: '200'
    }
  },
  data() {
    return {
      contentHeight: 0,
      imgOverlayContentHeight: 0
    }
  },
  beforeMount() {
    setTimeout(() => {
      if (this.$refs.content && this.imgOverlay) {
        this.imgOverlayContentHeight = this.$refs.imgOverlayContent.nativeView.getActualSize().height
      } else if (this.$refs.content && !this.imgOverlay) {
        this.contentHeight = this.$refs.content.nativeView.getActualSize().height
      }
    }, 300)
  }
}

export default MDBCard
export { MDBCard }
</script>

<style scoped lang="scss">
.mdb-rgba-black-strong {
  background-color: rgba(0, 0, 0, 0.7); }
</style>
