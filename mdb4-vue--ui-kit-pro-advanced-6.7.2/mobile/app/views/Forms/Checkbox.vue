<template>
  <Page>
    <Navigation title="Checkbox" parent="formsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic examples" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <CheckBox :checked="checked" />
          <CheckBox :checked="checked2" @checkedChange="checked2 = $event.value" />
        </WrapLayout>
        <Label text="Colorful examples" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <CheckBox :checked="checked3" fillColor="#ff3547" @checkedChange="checked3 = $event.value" />
          <CheckBox :checked="checked3" fillColor="#00c851" @checkedChange="checked3 = $event.value" />
          <CheckBox :checked="checked3" fillColor="#ffbb33" @checkedChange="checked3 = $event.value" />
        </WrapLayout>
        <Label text="Toggle example" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <CheckBox :checked="checked2" @checkedChange="checked2 = $event.value" />
          <Label @tap="checked2 = !checked2" text="Click to toggle" />
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Vue from 'nativescript-vue'
Vue.registerElement(
  'CheckBox',
  () => require('@nstudio/nativescript-checkbox').CheckBox,
  {
    model: {
      prop: 'checked',
      event: 'checkedChange'
    }
  }
)

import { Navigation } from '../Navigation'

export default {
  name: 'Checkbox',
  components: {
    Navigation
  },
  data() {
    return {
      checked: false,
      checked2: true,
      checked3: true
    }
  }
}
</script>

<style scoped>
</style>
