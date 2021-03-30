<template>
  <Page>
    <Navigation title="Badges" parent="componentsPage" />
    <ScrollView>
      <StackLayout padding="10">

        <Label text="Basic" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBadge text="Primary" mdbColor="primary" width="50" />
          <MDBBadge text="Danger" mdbColor="danger" width="50" />
          <MDBBadge text="Success" mdbColor="success" width="50" />
          <MDBBadge text="Warning" mdbColor="warning" width="50" />
          <MDBBadge text="Info" mdbColor="info" width="50" />
        </WrapLayout>

        <Label text="Pill badges" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBadge text="Primary" mdbColor="primary" width="50" pill />
          <MDBBadge text="Danger" mdbColor="danger" width="50" pill />
          <MDBBadge text="Success" mdbColor="success" width="50" pill />
          <MDBBadge text="Warning" mdbColor="warning" width="50" pill />
          <MDBBadge text="Info" mdbColor="info" width="50" pill />
        </WrapLayout>

        <Label text="Badges with icons" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBadge icon="user" mdbColor="primary" width="20" />
          <MDBBadge icon="cat" mdbColor="danger" width="20" />
          <MDBBadge icon="dog" mdbColor="success" width="20" />
          <MDBBadge icon="user" mdbColor="warning" width="20" pill />
          <MDBBadge icon="cat" mdbColor="info" width="20" pill />
          <MDBBadge icon="dog" mdbColor="secondary" width="20" pill />
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBadge } from '../../components/Components/Badge'

export default {
  name: 'Buttons',
  components: {
    Navigation,
    MDBBadge
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
