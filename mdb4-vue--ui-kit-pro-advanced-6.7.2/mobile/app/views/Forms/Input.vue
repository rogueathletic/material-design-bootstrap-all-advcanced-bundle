<template>
  <Page>
    <Navigation title="Inputs" parent="formsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic example" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <TextField :text="textFieldValue" paddingBottom="5" :borderBottomColor="active1 ? '#4285f4' : '#ced4da'" borderBottomWidth="1" @focus="active1 = true" @blur="active1 = false"/>
        </StackLayout>
        <Label text="Placeholder" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8" >
          <TextField hint="Placeholder" paddingBottom="5" :borderBottomColor="active2 ? '#4285f4' : '#ced4da'" borderBottomWidth="1" @focus="active2 = true" @blur="active2 = false" />
        </StackLayout>
        <Label text="Password" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <TextField :text="textFieldValue" secure paddingBottom="5" :borderBottomColor="active3 ? '#4285f4' : '#ced4da'" borderBottomWidth="1" @focus="active3 = true" @blur="active3 = false" />
        </StackLayout>
        <Label text="Disabled" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <TextField :text="textFieldValue" editable="false" paddingBottom="5" :borderBottomColor="active4 ? '#4285f4' : '#ced4da'" borderBottomWidth="1" @focus="active4 = true" @blur="active4 = false" />
        </StackLayout>
        <Label text="Max length" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <TextField :maxLength="5"	paddingBottom="5" :borderBottomColor="active5 ? '#4285f4' : '#ced4da'" borderBottomWidth="1" @focus="active5 = true" @blur="active5 = false" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'

export default {
  name: 'Input',
  components: {
    Navigation
  },
  data() {
    return {
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      textFieldValue: 'Example value'
    }
  }
}
</script>

<style scoped>
</style>
