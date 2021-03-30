<template>
  <Page>
    <Navigation title="Forms" />
    <ScrollView>
      <StackLayout padding="20 10">
        <MDBBtn text="Checkbox" @tap.native="$goto('checkbox')" />
        <MDBBtn text="Input" @tap.native="$goto('inputs')" marginTop="5" />
        <MDBBtn text="Radio" @tap.native="$goto('radio')" marginTop="5" />
        <MDBBtn text="Switch" @tap.native="$goto('switcher')" marginTop="5" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'FormsPage',
  components: {
    Navigation,
    MDBBtn
  }
}
</script>

<style scoped>
</style>
