<template>
  <Page>
    <Navigation title="Modals" />
    <ScrollView>
      <StackLayout padding="20 10">
        <MDBBtn text="Modals" @tap.native="$goto('modal')" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'ModalsPage',
  components: {
    Navigation,
    MDBBtn
  }
}
</script>

<style scoped>
</style>
