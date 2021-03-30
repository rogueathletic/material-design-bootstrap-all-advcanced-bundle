<template>
  <Page>
    <Navigation title="Cards" parent="componentsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCard img="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content.">
            <MDBBtn text="Button" mdbColor="primary" marginTop="15" />
          </MDBCard>
        </WrapLayout>
        <Label text="Image overlay" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCard imgOverlay="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg">
            <WrapLayout>
              <StackLayout width="100%" orientation="horizontal" horizontalAlignment="center" paddingTop="5" >
                <MDBIcon icon="chart-pie" fontSize="14" color="#4caf50" :paddingTop="$isAndroid && '2'" paddingRight="5" :paddingBottom="$isIOS && '8'" />
                <Label text="Marketing" fontSize="14" color="#4caf50" paddingBottom="8" />
              </StackLayout>
              <Label width="100%" text="This is the card title" fontSize="18" class="mdb-font-bold" color="white" paddingBottom="8" textAlignment="center" />
              <Label width="100%" textWrap="true" textAlignment="center" color="white" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              <StackLayout width="100%">
                <MDBBtn text="View project" mdbColor="success" marginTop="25" horizontalAlignment="center" width="110" />
              </StackLayout>
            </WrapLayout>
          </MDBCard>
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'
import { MDBCard } from '../../components/Components/Card'
import { MDBIcon } from '../../components/Content/Icon'

export default {
  name: 'Cards',
  components: {
    Navigation,
    MDBBtn,
    MDBCard,
    MDBIcon
  }
}
</script>

<style scoped>
</style>
