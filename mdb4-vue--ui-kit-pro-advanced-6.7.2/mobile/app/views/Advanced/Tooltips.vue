<template>
  <Page>
    <Navigation title="Tooltips" parent="advancedPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic examples" marginTop="10" marginBottom="2" />
        <StackLayout padding="40 10" borderWidth="1" borderColor="#d8d8d8">
          <WrapLayout horizontalAlignment="center">
            <MDBTooltip text="Top" position="top" tooltipContent="Top tooltip" />
          </WrapLayout>
          <WrapLayout horizontalAlignment="center" marginTop="10">
            <MDBTooltip text="Right" position="right" tooltipContent="Right tooltip" />
          </WrapLayout>
          <WrapLayout horizontalAlignment="center" marginTop="10">
            <MDBTooltip text="Left" position="left" tooltipContent="Left tooltip" />
          </WrapLayout>
          <WrapLayout horizontalAlignment="center" marginTop="10">
            <MDBTooltip text="Bottom" position="bottom" tooltipContent="Bottom tooltip" />
          </WrapLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBTooltip } from '../../components/Advanced/Tooltip'

export default {
  name: 'Buttons',
  components: {
    Navigation,
    MDBTooltip
  }
}
</script>

<style scoped>
</style>
