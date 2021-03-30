<template>
  <Page>
    <Navigation title="Panels" parent="componentsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCard title="Panel title" text="Some quick example text to build on the card title and make up the bulk of the card's content.">
            <Label text="Card link" color="black" marginTop="15" marginRight="15" />
            <Label text="Another link" color="black" marginTop="15" />
          </MDBCard>
        </WrapLayout>
        <Label text="Simple" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCard text="This is some text within a panel body." textColor="black" />
        </WrapLayout>
        <Label text="Titles, text and links" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCard>
            <StackLayout>
              <Label text="Panel title" fontSize="18" class="mdb-font-bold" color="black" />
              <Label text="Panel subtitle" fontSize="15" paddingTop="2" />
              <Label text="Some quick example text to build on the panel title and make up the bulk of the panel's content." textWrap="true" paddingTop="5" />
              <WrapLayout>
                <Label text="Card link" color="blue" marginTop="15" marginRight="15" />
                <Label text="Another link" color="blue" marginTop="15" />
              </WrapLayout>
            </StackLayout>
          </MDBCard>
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBCard } from '../../components/Components/Card'

export default {
  name: 'Cards',
  components: {
    Navigation,
    MDBCard
  }
}
</script>

<style scoped>
</style>
