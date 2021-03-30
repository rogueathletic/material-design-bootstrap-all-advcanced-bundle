<template>
  <Page>
    <Navigation title="Masks" parent="cssPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Light overlay" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBMask>
            <Image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img(121).jpg" width="100%" />
          </MDBMask>
        </WrapLayout>
        <Label text="Strong overlay" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBMask overlay="strong">
            <Image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img(121).jpg" width="100%" />
          </MDBMask>
        </WrapLayout>
        <Label text="Slight overlay" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBMask overlay="slight">
            <Image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img(121).jpg" width="100%" />
          </MDBMask>
        </WrapLayout>
        <Label text="Dark waves" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBMask darkWaves>
            <Image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img(121).jpg" width="100%" />
          </MDBMask>
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBMask } from '../../components/CSS/Mask'

export default {
  name: 'Icons',
  components: {
    Navigation,
    MDBMask
  }
}
</script>

<style scoped>
</style>
