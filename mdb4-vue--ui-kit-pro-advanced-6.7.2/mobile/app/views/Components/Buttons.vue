<template>
  <Page>
    <Navigation title="Buttons" parent="componentsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn text="Primary" mdbColor="primary" />
          <MDBBtn text="Danger" mdbColor="danger" />
          <MDBBtn text="Success" mdbColor="success" />
        </WrapLayout>

        <Label text="Buttons with icon" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn icon="user" mdbColor="default" width="50" />
          <MDBBtn icon="cat" mdbColor="secondary" width="50" />
          <MDBBtn icon="dog" mdbColor="info" width="50" />
        </WrapLayout>

        <Label text="Buttons with icon and text" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn icon="user" text="User" mdbColor="default" />
          <MDBBtn icon="cat" text="Cat" mdbColor="secondary" />
          <MDBBtn icon="dog" text="Dog" mdbColor="info" />
        </WrapLayout>

        <Label text="Buttons with icon and text on the left" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn icon="user" text="User" textLeft mdbColor="default" />
          <MDBBtn icon="cat" text="Cat" textLeft mdbColor="secondary" />
          <MDBBtn icon="dog" text="Dog" textLeft mdbColor="info" />
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'Buttons',
  components: {
    Navigation,
    MDBBtn
  },
  methods: {
    onTap(color) {
      alert(`${color} button clicked`)
    }
  }
}
</script>

<style scoped>
</style>
