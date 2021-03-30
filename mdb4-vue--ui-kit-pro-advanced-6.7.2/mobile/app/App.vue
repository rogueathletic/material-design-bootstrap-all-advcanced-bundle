<template>
  <Page>
    <Navigation :title="`MDB Vue ${$isAndroid ? 'Android' : 'iOS'} App`" home />
    <ScrollView>
      <StackLayout>
        <StackLayout padding="50 10 10 10">
          <Image src="~/assets/images/mdb-mobile-logo.png" width="50%" />
          <Label text="MDB Vue Mobile with Nativescript-Vue." textWrap="true" color="black" textAlignment="center" />
          <Label text="This demo shows the actual use of MDB Vue Mobile components in the application." marginTop="4" textWrap="true" textAlignment="center" />
          
          <MDBCard imgOverlay="https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg" marginTop="40">
            <WrapLayout>
              <StackLayout width="100%" orientation="horizontal" horizontalAlignment="center" paddingTop="10" >
                <MDBIcon icon="code" fontSize="24" color="#4caf50" paddingTop="2" paddingRight="5" />
                <Label text="Advanced" fontSize="24" class="mdb-font-bold" color="#4caf50" :paddingTop="$isIOS && '4'" :paddingBottom="$isIOS ? '4' : '8'" />
              </StackLayout>
              <Label width="100%" textWrap="true" textAlignment="center" color="white" text="Advanced components such as carousels, tooltips and collapse. All in Material Design version." />
              <StackLayout width="100%">
                <MDBBtn text="More" backgroundColor="#4caf50" color="white" marginTop="15" horizontalAlignment="center" @tap.native="$goto('advancedPage')" />
              </StackLayout>
            </WrapLayout>
          </MDBCard>
          
          <MDBCard imgOverlay="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" marginTop="10">
            <WrapLayout>
              <StackLayout width="100%" orientation="horizontal" horizontalAlignment="center" paddingTop="10" >
                <MDBIcon icon="cubes" fontSize="24" color="#2196f3" paddingTop="4" paddingRight="5" />
                <Label text="Components" fontSize="24" class="mdb-font-bold" color="#2196f3" :paddingTop="$isIOS && '4'" :paddingBottom="$isIOS ? '4' : '8'" />
              </StackLayout>
              <Label width="100%" textWrap="true" textAlignment="center" color="white" text="Ready-to-use components that you can use in your applications." />
              <StackLayout width="100%">
                <MDBBtn text="More" backgroundColor="#2196f3" color="white" marginTop="25" horizontalAlignment="center" @tap.native="$goto('componentsPage')" />
              </StackLayout>
            </WrapLayout>
          </MDBCard>

          <MDBCard imgOverlay="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" marginTop="10">
            <WrapLayout>
              <StackLayout width="100%" orientation="horizontal" horizontalAlignment="center" paddingTop="10" >
                <MDBIcon icon="css3" fab fontSize="24" color="#e91e63" paddingTop="4" paddingRight="5" />
                <Label text="CSS" fontSize="24" class="mdb-font-bold" color="#e91e63" :paddingTop="$isIOS && '4'" :paddingBottom="$isIOS ? '4' : '8'" />
              </StackLayout>
              <Label width="100%" textWrap="true" textAlignment="center" color="white" text="Get to know all our css styles in one place." />
              <StackLayout width="100%">
                <MDBBtn text="More" backgroundColor="#e91e63" color="white" marginTop="25" horizontalAlignment="center" @tap.native="$goto('cssPage')" />
              </StackLayout>
            </WrapLayout>
          </MDBCard>

          <MDBCard imgOverlay="https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg" marginTop="10">
            <WrapLayout>
              <StackLayout width="100%" orientation="horizontal" horizontalAlignment="center" paddingTop="20" >
                <MDBIcon icon="edit" fontSize="24" color="#2196f3" paddingTop="4" paddingRight="5" />
                <Label text="Forms" fontSize="24" class="mdb-font-bold" color="#2196f3" :paddingTop="$isIOS && '4'" :paddingBottom="$isIOS ? '4' : '8'" />
              </StackLayout>
              <Label width="100%" textWrap="true" textAlignment="center" color="white" text="Checkboxes, inputs, radios, switches. Everything in one place and ready to use!" />
              <StackLayout width="100%">
                <MDBBtn text="More" backgroundColor="#2196f3" color="white" marginTop="15" horizontalAlignment="center" @tap.native="$goto('formsPage')" />
              </StackLayout>
            </WrapLayout>
          </MDBCard>

          <MDBCard imgOverlay="https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg" marginTop="10">
            <WrapLayout>
              <StackLayout width="100%" orientation="horizontal" horizontalAlignment="center" paddingTop="10" >
                <MDBIcon icon="window-restore" fontSize="24" color="#4caf50" paddingTop="4" paddingRight="5" />
                <Label text="Modals" fontSize="24" class="mdb-font-bold" color="#4caf50" :paddingTop="$isIOS && '4'" :paddingBottom="$isIOS ? '4' : '8'" />
              </StackLayout>
              <Label width="100%" textWrap="true" textAlignment="center" color="white" text="Modals are great for displaying advanced messages to the user. Cookies, logging in, registration and much more." />
              <StackLayout width="100%">
                <MDBBtn text="More" backgroundColor="#4caf50" color="white" marginTop="15" horizontalAlignment="center" @tap.native="$goto('modalsPage')" />
              </StackLayout>
            </WrapLayout>
          </MDBCard>

          <MDBCard imgOverlay="https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg" marginTop="10">
            <WrapLayout>
              <StackLayout width="100%" orientation="horizontal" horizontalAlignment="center" paddingTop="25" >
                <MDBIcon icon="bars" fontSize="24" color="#e91e63" paddingTop="4" paddingRight="5" />
                <Label text="Navigation" fontSize="24" class="mdb-font-bold" color="#e91e63" :paddingTop="$isIOS && '4'" :paddingBottom="$isIOS ? '4' : '8'" />
              </StackLayout>
              <Label width="100%" textWrap="true" textAlignment="center" color="white" :text="`Ready-to-use ${$isAndroid ? 'navbars and ' : ''}footers!`" />
              <StackLayout width="100%">
                <MDBBtn text="More" backgroundColor="#e91e63" color="white" marginTop="15" horizontalAlignment="center" @tap.native="$goto('navigationPage')" />
              </StackLayout>
            </WrapLayout>
          </MDBCard>

        </StackLayout>
          
        <StackLayout backgroundColor="#ececec" padding="10">
          <WrapLayout horizontalAlignment="center">
            <MDBIcon icon="copyright" far color="#777" :paddingTop="$isAndroid && '2'" fontSize="12" />
            <Label text=" 2019 Copyright: " color="#777" fontSize="12" />
            <Label text="MDBootstrap.com" color="black" fontSize="12" @tap="openMDBUrl" />
          </WrapLayout>
        </StackLayout>

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const utilityModule = require('utils/utils')

import { Navigation } from './views/Navigation'
import { MDBBtn } from './components/Components/Button'
import { MDBCard } from './components/Components/Card'
import { MDBIcon } from './components/Content/Icon'

export default {
  name: 'Home',
  components: {
    Navigation,
    MDBBtn,
    MDBCard,
    MDBIcon
  },
  methods: {
    openMDBUrl() {
      utilityModule.openUrl('https://mdbootstrap.com')
    }
  }
}
</script>

<style scoped>
</style>
