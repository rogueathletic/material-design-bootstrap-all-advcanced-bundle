<template>
  <Page>
    <Navigation title="Footers" parent="navigationPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic example" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <StackLayout backgroundColor="#ececec" padding="10">
            <WrapLayout horizontalAlignment="center">
              <MDBIcon icon="copyright" far color="#777" :paddingTop="$isAndroid && '2'" fontSize="12" />
              <Label text=" 2019 Copyright: " color="#777" fontSize="12" />
              <Label text="MDBootstrap.com" color="black" fontSize="12" @tap="openMDBUrl" />
            </WrapLayout>
          </StackLayout>
        </StackLayout>
        <Label text="Colorful example" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <StackLayout backgroundColor="#3679c2" padding="10">
            <WrapLayout horizontalAlignment="center">
              <MDBIcon icon="copyright" far color="#ddd" :paddingTop="$isAndroid && '2'" fontSize="12" />
              <Label text=" 2019 Copyright: " color="#ddd" fontSize="12" />
              <Label text="MDBootstrap.com" color="white" fontSize="12" @tap="openMDBUrl" />
            </WrapLayout>
          </StackLayout>
        </StackLayout>
        <Label text="Footer with content" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <StackLayout backgroundColor="#4596f3" padding="10">
            <Label text="Footer Content" color="white" fontSize="18" paddingBottom="10" />
            <Label text="Here you can put some footer content." color="white" paddingBottom="5" />
          </StackLayout>
          <StackLayout backgroundColor="#3679c2" padding="10">
            <WrapLayout horizontalAlignment="center">
              <MDBIcon icon="copyright" far color="#ddd" :paddingTop="$isAndroid && '2'" fontSize="12" />
              <Label text=" 2019 Copyright: " color="#ddd" fontSize="12" />
              <Label text="MDBootstrap.com" color="white" fontSize="12" @tap="openMDBUrl" />
            </WrapLayout>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const utilityModule = require('utils/utils')

import { Navigation } from '../Navigation'
import { MDBIcon } from '../../components/Content/Icon'

export default {
  name: 'Footer',
  components: {
    Navigation,
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
