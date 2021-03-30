<template>
  <Page>
    <Navigation title="CSS" />
    <ScrollView>
      <StackLayout padding="20 10">
        <MDBBtn text="Masks" @tap.native="$goto('masks')" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'CSSPage',
  components: {
    Navigation,
    MDBBtn
  }
}
</script>

<style scoped>
</style>
