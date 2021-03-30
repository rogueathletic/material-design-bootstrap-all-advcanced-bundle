<template>
  <Page>
    <Navigation title="Switch" parent="formsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic examples" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <Label text="Off" /><Switch v-model="switchValue" /><Label text="On" />
          <Label text="Off" paddingLeft="50" /><Switch v-model="switch2Value" /><Label text="On" />
        </WrapLayout>
        <Label text="Colors" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <Switch v-model="switch2Value" class="mdb-danger-switch" />
          <Switch v-model="switch2Value" class="mdb-success-switch" />
          <Switch v-model="switch2Value" class="mdb-warning-switch" />
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'

export default {
  name: 'Switcher',
  components: {
    Navigation
  },
  data() {
    return {
      switchValue: false,
      switch2Value: true
    }
  }
}
</script>

<style scoped>
Switch[checked=true] {
  color: #4285f4;
}
Switch.mdb-danger-switch[checked=true] {
  color: #ff3547;
}
Switch.mdb-success-switch[checked=true] {
  color: #00c851;
}
Switch.mdb-warning-switch[checked=true] {
  color: #ffbb33;
}
</style>
