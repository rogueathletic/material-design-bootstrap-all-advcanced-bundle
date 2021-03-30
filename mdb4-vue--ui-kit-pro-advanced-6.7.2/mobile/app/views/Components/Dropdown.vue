<template>
  <Page>
    <Navigation title="Dropdowns" parent="componentsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic examples" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn dropdown text="Dropdown" @tap.native="toggleDropdown" mdbColor="primary" width="110" />
          <MDBBtn dropdown text="Pick your car" @tap.native="toggleSecondDropdown" mdbColor="danger" width="130" />
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'Dropdown',
  components: {
    Navigation,
    MDBBtn
  },
  methods: {
    toggleDropdown() {
      action('Pick your option', 'Cancel', ['Option 1', 'Option 2', 'Option 3'])
        .then(result => console.log(result))
    },
    toggleSecondDropdown() {
      action('Pick your car', 'Cancel', ['Audi', 'Ford', 'Toyota'])
        .then(result => console.log(result))
    }
  }
}
</script>

<style scoped>
</style>
