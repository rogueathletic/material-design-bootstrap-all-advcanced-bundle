<template>
  <Page>
    <Navigation title="Navigation" />
    <ScrollView>
      <StackLayout padding="20 10">
        <MDBBtn text="Footers" @tap.native="$goto('footer')" />
        <MDBBtn text="Navbars" v-if="$isAndroid" @tap.native="$goto('navbar')" marginTop="5" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'NavigationPage',
  components: {
    Navigation,
    MDBBtn
  }
}
</script>

<style scoped>
</style>
