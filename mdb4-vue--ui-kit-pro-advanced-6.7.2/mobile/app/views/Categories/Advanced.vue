<template>
  <Page>
    <Navigation title="Advanced" />
    <ScrollView>
      <StackLayout padding="20 10">
        <MDBBtn text="Carousel" @tap.native="$goto('carousels')" />
        <MDBBtn text="Collapse" @tap.native="$goto('collapse')"  marginTop="5" />
        <MDBBtn text="Tooltips" @tap.native="$goto('tooltips')"  marginTop="5" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'AdvancedPage',
  components: {
    Navigation,
    MDBBtn
  }
}
</script>

<style scoped>
</style>
