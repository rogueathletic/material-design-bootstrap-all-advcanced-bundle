<template>
  <div id="app" :style="{background: pageBackground}">
    <mdb-container>
      <HelloWorld msg="MDB Color Picker" />
      <h2 class="mb-3 font-weight-bold">Basic Example</h2>
      <mdb-card>
        <mdb-card-body class="text-center d-flex justify-content-center align-items-center flex-column">
          <p class="pt-2">Click the dark square to activate the Color Picker</p>
          
            <mdb-color-picker :show="showPicker1" @getValue="color1 = $event" @close="showPicker1 = false">
              <div class="mdb-cp-btn-wrapper">
                <div class="mdb-cp-btn" :style="{background: color1}" @click="showPicker1 = !showPicker1"></div>
              </div>
            </mdb-color-picker>
            
        </mdb-card-body>
      </mdb-card>

      <h2 class="mb-3 mt-5 font-weight-bold">Using as button</h2>
      <mdb-card>
        <mdb-card-body class="text-center d-flex justify-content-center align-items-center flex-column">
          <p class="pt-2">Click the below button to activate the Color Picker</p>
          
            <mdb-color-picker :show="showPicker2" @close="showPicker2 = false">
              <mdb-btn color="primary" size="sm" @click="showPicker2 = !showPicker2">Open picker</mdb-btn>
            </mdb-color-picker>
            
        </mdb-card-body>
      </mdb-card>

      <h2 class="mb-3 mt-5 font-weight-bold">Change color of the other elements</h2>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-card :style="{background: color3}">
            <mdb-card-body class="text-center d-flex justify-content-center align-items-center flex-column">
              <p class="pt-2">My background color will be changed</p>
              
              <mdb-color-picker :show="showPicker3" @getValue="color3 = $event" @close="showPicker3 = false">
                <mdb-btn color="primary" size="sm" @click="showPicker3 = !showPicker3">Open picker</mdb-btn>
              </mdb-color-picker>

            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="6">
          <mdb-card>
            <mdb-card-body class="text-center d-flex justify-content-center align-items-center flex-column">
              <p class="pt-2" :style="{color: color4}">My text color will be changed</p>

              <mdb-color-picker :show="showPicker4" @getValue="color4 = $event" @close="showPicker4 = false">
                <mdb-btn color="primary" size="sm" @click="showPicker4 = !showPicker4">Open picker</mdb-btn>
              </mdb-color-picker>
              
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>

      <h2 class="mb-3 mt-5 font-weight-bold">Copy saved colors to clipboard</h2>
      <mdb-card>
        <mdb-card-body class="text-center d-flex justify-content-center align-items-center flex-column">
          <p class="pt-2">Click the "Save" button and check the results by pasting the clipboard in some place</p>
          
            <mdb-color-picker :show="showPicker5" @close="showPicker5 = false">
              <mdb-btn color="primary" size="sm" @click="showPicker5 = !showPicker5">Open picker</mdb-btn>
            </mdb-color-picker>
            
        </mdb-card-body>
      </mdb-card>

      <h2 class="mb-3 mt-5 font-weight-bold">Change the site background color</h2>
      <mdb-card>
        <mdb-card-body class="text-center d-flex justify-content-center align-items-center flex-column">
          <p class="pt-2">Change the background color if this site dynamically by changing the color in Color Picker</p>
          
            <mdb-color-picker :show="showPicker6" @close="showPicker6 = false" @getValue="pageBackground = $event">
              <mdb-btn color="primary" size="sm" @click="showPicker6 = !showPicker6">Open picker</mdb-btn>
            </mdb-color-picker>
            
        </mdb-card-body>
      </mdb-card>
    </mdb-container>
  </div>
</template>

<script>
import mdbColorPicker from 'mdb-color-picker'
import HelloWorld from './components/HelloWorld.vue'
import { mdbContainer, mdbCard, mdbCardBody, mdbBtn, mdbRow, mdbCol } from 'mdbvue'

export default {
  name: 'app',
  components: {
    mdbColorPicker,
    HelloWorld,
    mdbContainer,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbRow,
    mdbCol
  },
  data() {
    return {
      color1: '#ff0000ff',
      color3: '#ffffff',
      color4: '#000000',
      pageBackground: '#ffffff',
      showPicker1: false,
      showPicker2: false,
      showPicker3: false,
      showPicker4: false,
      showPicker5: false,
      showPicker6: false
    }
  }
}
</script>

<style>
#app {
  padding-top: 60px;
  padding-bottom: 400px;
}
</style>
