<template>
  <Page>
    <Navigation title="Navbars" parent="navigationPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic example" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <ActionBar title="Navbar">
            <ActionItem ios.systemIcon="16" ios.position="right" text="Home" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Features" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Pricing" android.position="popup" />
          </ActionBar>
        </StackLayout>
        <Label text="Color sheme" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <ActionBar title="Navbar" backgroundColor="#4285f4" color="white">
            <ActionItem ios.systemIcon="16" ios.position="right" ios.color="white" android.color="white" text="Home" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Features" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Pricing" android.position="popup" />
          </ActionBar>
          <ActionBar title="Navbar" backgroundColor="#ff3547" color="white" marginTop="5">
            <ActionItem ios.systemIcon="16" ios.position="right" ios.color="white" android.color="white" text="Home" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Features" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Pricing" android.position="popup" />
          </ActionBar>
          <ActionBar title="Navbar" backgroundColor="#00c851" color="white" marginTop="5">
            <ActionItem ios.systemIcon="16" ios.position="right" ios.color="white" android.color="white" text="Home" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Features" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Pricing" android.position="popup" />
          </ActionBar>
        </StackLayout>
        <Label text="Back icon" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <ActionBar title="Navbar" backgroundColor="#ffbb33" color="white">
            <NavigationButton android.systemIcon="ic_menu_back" />
            <ActionItem ios.systemIcon="16" ios.position="right" ios.color="white" android.color="white" text="Home" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Features" android.position="popup" />
            <ActionItem ios.systemIcon="16" ios.position="right" text="Pricing" android.position="popup" />
          </ActionBar>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'

export default {
  name: 'Navbar',
  components: {
    Navigation
  }
}
</script>

<style scoped>
</style>
