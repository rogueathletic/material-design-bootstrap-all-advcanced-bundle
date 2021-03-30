<template>
  <Page>
    <Navigation title="Collapse" parent="advancedPage" />
    <ScrollView>
      <StackLayout padding="10">
        <Label text="Basic" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCollapse toggler="Toggle">
            <Label textWrap="true" paddingTop="10" text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." />
          </MDBCollapse>
        </WrapLayout>
        <Label text="Active" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCollapse toggler="Toggle" active>
            <Label textWrap="true" paddingTop="10" text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." />
          </MDBCollapse>
        </WrapLayout>
        <Label text="Slow animation" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCollapse toggler="Toggle" speed="slow">
            <Label textWrap="true" paddingTop="10" text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." />
          </MDBCollapse>
        </WrapLayout>
        <Label text="Fast animation" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCollapse toggler="Toggle" speed="fast">
            <Label textWrap="true" paddingTop="10" text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." />
          </MDBCollapse>
        </WrapLayout>
        <Label text="Banner" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCollapse toggler="Toggle" banner active togglerAlign="right">
            <Label textWrap="true" paddingBottom="10" text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." />
          </MDBCollapse>
        </WrapLayout>
        <Label text="Hide all option" marginTop="10" marginBottom="2" />
        <WrapLayout padding="10" borderWidth="1" borderColor="#d8d8d8">
          <MDBCollapse toggler="Hide" banner active hideAll togglerAlign="right">
            <Label textWrap="true" paddingBottom="10" text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." />
          </MDBCollapse>
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Navigation } from '../Navigation'
import { MDBCollapse } from '../../components/Advanced/Collapse'

export default {
  name: 'Collapse',
  components: {
    Navigation,
    MDBCollapse
  }
}
</script>

<style scoped>
</style>
