<template>
  <Page>
    <Navigation title="Icons" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic examples" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBIcon icon="user" style="margin: 10" />
          <MDBIcon icon="clock" style="margin: 10" />
          <MDBIcon icon="address-card" style="margin: 10" />
          <MDBIcon icon="dog" style="margin: 10" />
          <MDBIcon icon="cat" style="margin: 10" />
          <MDBIcon icon="facebook" fab style="margin: 10" />
          <MDBIcon icon="bell" style="margin: 10" />
          <MDBIcon icon="bell" far style="margin: 10" />
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBIcon } from '../../components/Content/Icon'

export default {
  name: 'Icons',
  components: {
    Navigation,
    MDBIcon
  }
}
</script>

<style scoped>
</style>
