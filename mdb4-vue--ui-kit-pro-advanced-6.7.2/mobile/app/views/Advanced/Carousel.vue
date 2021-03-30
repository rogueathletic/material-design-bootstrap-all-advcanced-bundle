<template>
  <Page>
    <Navigation title="Carousel" parent="advancedPage"  />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <GridLayout height="200">
            <Carousel height="100%" width="100%" indicatorColor="white" showIndicator="true" android:indicatorAnimation="swap">
              <CarouselItem id="slide1">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" stretch="aspectFill" />
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide2">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg" stretch="aspectFill" />
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide3">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg" stretch="aspectFill" />
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide4">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(138).jpg" stretch="aspectFill" />
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
            </Carousel>
          </GridLayout>
        </WrapLayout>
        <Label text="Carousel with captions" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <GridLayout height="200">
            <Carousel height="100%" width="100%" indicatorColor="white" showIndicator="true" verticalAlignment="bottom" android:indicatorAnimation="swap" color="white">
              <CarouselItem id="slide1">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" stretch="aspectFill" />
                  <AbsoluteLayout verticalAlignment="bottom" horizontalAlignment="center" marginBottom="40">
                    <Label text="Slide 1" height="25"/>
                  </AbsoluteLayout>
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide2">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg" stretch="aspectFill" />
                  <AbsoluteLayout verticalAlignment="bottom" horizontalAlignment="center" marginBottom="40">
                    <Label text="Slide 2" height="25"/>
                  </AbsoluteLayout>
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide3">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg" stretch="aspectFill" />
                  <AbsoluteLayout verticalAlignment="bottom" horizontalAlignment="center" marginBottom="40">
                    <Label text="Slide 3" height="25"/>
                  </AbsoluteLayout>
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide4">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(138).jpg" stretch="aspectFill" />
                  <AbsoluteLayout verticalAlignment="bottom" horizontalAlignment="center" marginBottom="40">
                    <Label text="Slide 4" height="25"/>
                  </AbsoluteLayout>
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
            </Carousel>
          </GridLayout>
        </WrapLayout>
        <Label text="Drop animation (Android only)" marginTop="10" marginBottom="2" v-if="$isAndroid" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8" v-if="$isAndroid">
          <GridLayout height="200">
            <Carousel height="100%" width="100%" indicatorColor="white" showIndicator="true" android:indicatorAnimation="drop">
              <CarouselItem id="slide1">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" stretch="aspectFill" />
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide2">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg" stretch="aspectFill" />
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide3">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg" stretch="aspectFill" />
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
              <CarouselItem id="slide4">
                <GridLayout>
                  <Image src="https://mdbootstrap.com/img/Photos/Slides/img%20(138).jpg" stretch="aspectFill" />
                  <AbsoluteLayout :left="0" :top="0" width="100%" height="100%">
                    <MDRipple rippleColor="rgba(255, 255, 255, 0.4)" width="100%" height="100%" />
                  </AbsoluteLayout>
                </GridLayout>
              </CarouselItem>
            </Carousel>
          </GridLayout>
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import Vue from 'nativescript-vue'
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel)
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem)

export default {
  name: 'Carousels',
  components: {
    Navigation
  }
}
</script>

<style scoped>
</style>
