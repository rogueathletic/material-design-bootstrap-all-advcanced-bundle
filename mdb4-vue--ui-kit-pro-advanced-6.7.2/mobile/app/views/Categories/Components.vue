<template>
  <Page>
    <Navigation title="Components" />
    <ScrollView>
      <StackLayout padding="20 10">
        <MDBBtn text="Badges" @tap.native="$goto('badges')" />
        <MDBBtn text="Buttons" @tap.native="$goto('buttons')" marginTop="5" />
        <MDBBtn text="Button Groups" @tap.native="$goto('buttonGroups')" marginTop="5" />
        <MDBBtn text="Cards" @tap.native="$goto('cards')" marginTop="5" />
        <MDBBtn text="Dropdowns" @tap.native="$goto('dropdown')" marginTop="5" />
        <MDBBtn text="Panels" @tap.native="$goto('panels')" marginTop="5" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'ComponentsPage',
  components: {
    Navigation,
    MDBBtn
  }
}
</script>

<style scoped>
</style>
