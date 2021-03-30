<template>
  <Page>
    <Navigation title="Radio" parent="formsPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic example (Android only)" marginTop="10" marginBottom="2" v-if="$isAndroid" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8" v-if="$isAndroid" >
          <CheckBox v-for="(option, key) in radioValues" :key="key" :text="option['text']" :checked="option['value']" boxType="circle" @tap="radioChange(key, option['value'])" />
        </StackLayout>
        <Label text="Multiple" marginTop="10" marginBottom="2" />
        <StackLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <CheckBox v-for="(option, key) in multiRadioValues" :key="key" :text="option['text']" :checked="option['value']" boxType="circle" @tap="multiRadioChange(key, option['value'])" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'

export default {
  name: 'Radio',
  components: {
    Navigation
  },
  data() {
    return {
      radioValues: [
        { text: 'Option 1', value: true },
        { text: 'Option 2', value: false },
        { text: 'Option 3', value: false }
      ],
      multiRadioValues: [
        { text: 'Option 1', value: false },
        { text: 'Option 2', value: false },
        { text: 'Option 3', value: false }
      ]
    }
  },
  methods: {
    radioChange(key, val) {
      this.radioValues.forEach(option => {
        option.value = false
      })
      this.radioValues[key].value = true
    },
    multiRadioChange(key, val) {
      this.multiRadioValues[key].value = !val
    }
  }
}
</script>

<style scoped>
</style>
