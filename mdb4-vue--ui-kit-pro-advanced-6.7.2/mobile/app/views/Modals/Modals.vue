<template>
  <Page>
    <Navigation title="Modals" parent="modalsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn text="Modal" mdbColor="primary" @tap.native="toggleBasicModal" />
        </WrapLayout>
        <Label text="Confirm" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn text="Modal" mdbColor="danger" @tap.native="toggleConfirmModal" />
        </WrapLayout>
        <Label text="Login" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn text="Modal" mdbColor="success" @tap.native="toggleLoginModal" />
        </WrapLayout>
        <Label text="Prompt" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBBtn text="Modal" mdbColor="primary" @tap.native="togglePromptModal" />
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBBtn } from '../../components/Components/Button'

export default {
  name: 'Modals',
  components: {
    Navigation,
    MDBBtn
  },
  methods: {
    toggleBasicModal() {
      alert({
        title: 'Modal title',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        okButtonText: 'Close'
      })
    },
    toggleConfirmModal() {
      confirm({
        title: 'Modal title',
        message: 'Are you ready?',
        okButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then(result => {
        console.log(result)
      })
    },
    toggleLoginModal() {
      login({
        title: 'Sign in',
        message: 'Please sign in',
        okButtonText: 'Login',
        cancelButtonText: 'Cancel',
        userName: 'Username',
        password: 'Password'
      }).then(result => {
        console.log(`Dialog result: ${result.result}, user: ${result.userName}, pwd: ${result.password}`)
      })
    },
    togglePromptModal() {
      prompt({
        title: 'Title',
        message: 'Message',
        okButtonText: 'OK',
        cancelButtonText: 'Cancel',
        defaultText: 'Default text',
      }).then(result => {
        console.log(`Dialog result: ${result.result}, text: ${result.text}`)
      })
    }
  }
}
</script>

<style scoped>
</style>
