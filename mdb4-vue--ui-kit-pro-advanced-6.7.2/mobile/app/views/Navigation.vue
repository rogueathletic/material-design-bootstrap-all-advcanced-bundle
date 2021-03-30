<template>
  <ActionBar :title="title">
    <Label v-if="home" :text="title" fontSize="20" paddingRight="10" />
    <NavigationButton v-else android.systemIcon="ic_menu_back" @tap="$goto(parent || 'home', routerOptions)" />
    <ActionItem @tap="$goto('badges')" v-if="$isAndroid" text="Badges" android.position="popup" />
    <ActionItem @tap="$goto('buttons')" v-if="$isAndroid" text="Buttons" android.position="popup" />
    <ActionItem @tap="$goto('buttonGroups')" v-if="$isAndroid" text="Button Groups" android.position="popup" />
    <ActionItem @tap="$goto('cards')" v-if="$isAndroid" text="Cards" android.position="popup" />
    <ActionItem @tap="$goto('carousels')" v-if="$isAndroid" text="Carousel" android.position="popup" />
    <ActionItem @tap="$goto('checkbox')" v-if="$isAndroid" text="Checkbox" android.position="popup" />
    <ActionItem @tap="$goto('collapse')" v-if="$isAndroid" text="Collapse" android.position="popup" />
    <ActionItem @tap="$goto('dropdown')" v-if="$isAndroid" text="Dropdowns" android.position="popup" />
    <ActionItem @tap="$goto('footer')" v-if="$isAndroid" text="Footers" android.position="popup" />
    <ActionItem @tap="$goto('icons')" v-if="$isAndroid" text="Icons" android.position="popup" />
    <ActionItem @tap="$goto('inputs')" v-if="$isAndroid" text="Input" android.position="popup" />
    <ActionItem @tap="$goto('masks')" v-if="$isAndroid" text="Masks" android.position="popup" />
    <ActionItem @tap="$goto('modal')" v-if="$isAndroid" text="Modals" android.position="popup" />
    <ActionItem @tap="$goto('navbar')" v-if="$isAndroid" text="Navbars" android.position="popup" />
    <ActionItem @tap="$goto('panels')" v-if="$isAndroid" text="Panels" android.position="popup" />
    <ActionItem @tap="$goto('radio')" v-if="$isAndroid" text="Radio" android.position="popup" />
    <ActionItem @tap="$goto('switcher')" v-if="$isAndroid" text="Switch" android.position="popup" />
    <ActionItem @tap="$goto('tooltips')" v-if="$isAndroid" text="Tooltips" android.position="popup" />
  </ActionBar>
</template>

<script>
const Navigation = {
  name: 'Navigation',
  props: {
    title: String,
    home: Boolean,
    parent: String
  },
  computed: {
    routerOptions() {
      return {
        transition: {
          name: 'slideRight'
        }
      }
    }
  }
}

export default Navigation
export { Navigation }
</script>

<style scoped>
</style>
