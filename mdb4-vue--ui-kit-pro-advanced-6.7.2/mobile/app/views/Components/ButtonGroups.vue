<template>
  <Page>
    <Navigation title="Button Groups" parent="componentsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic examples" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtnGroup>
            <MDBBtn text="Left" mdbColor="primary" btnGroup />
            <MDBBtn text="Middle" mdbColor="primary" btnGroup />
            <MDBBtn text="Right" mdbColor="primary" btnGroup />
          </MDBBtnGroup>
          <StackLayout width="100%" height="1" marginTop="5" marginBottom="5" borderColor="#d8d8d8" borderBottomWidth="1"></StackLayout>
          <MDBBtnGroup>
            <MDBBtn text="Left" mdbColor="danger" btnGroup />
            <MDBBtn text="Middle" mdbColor="danger" btnGroup />
            <MDBBtn text="Right" mdbColor="danger" btnGroup />
          </MDBBtnGroup>
        </WrapLayout>
        <Label text="Vertical colorful" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtnGroup vertical>
            <MDBBtn text="Top" mdbColor="warning" btnGroup />
            <MDBBtn text="Middle" mdbColor="warning" btnGroup />
            <MDBBtn text="Bottom" mdbColor="warning" btnGroup />
          </MDBBtnGroup>
        </StackLayout>
        <Label text="Vertical centered" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtnGroup vertical align="center">
            <MDBBtn text="Top" mdbColor="success" btnGroup />
            <MDBBtn text="Middle" mdbColor="success" btnGroup />
            <MDBBtn text="Bottom" mdbColor="success" btnGroup />
          </MDBBtnGroup>
        </StackLayout>
        <Label text="Vertical right aligned" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtnGroup vertical align="right">
            <MDBBtn text="Top" mdbColor="primary" btnGroup />
            <MDBBtn text="Middle" mdbColor="primary" btnGroup />
            <MDBBtn text="Bottom" mdbColor="primary" btnGroup />
          </MDBBtnGroup>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'
import { MDBBtnGroup } from '../../components/Components/ButtonGroup'

export default {
  name: 'Button Groups',
  components: {
    Navigation,
    MDBBtn,
    MDBBtnGroup
  }
}
</script>

<style scoped>
</style>
