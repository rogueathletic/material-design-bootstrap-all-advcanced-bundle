<template>
  <div class="preview">
    <section>
      <section>
        <mdb-vector-map
          class="preview-window"
          :map="map"
          :preselected="
            map === 'world' || map === 'worldPacific' ? preselected : ''
          "
          :fill="fill"
          :stroke="stroke"
          :background-color="background"
          :hover-fill="hover"
          :select-fill="selectColor"
          :stroke-width="width"
        />
      </section>

      <div class="toolbar">
        <div style="display: flex; flex-wrap: wrap;">
          <div class="option">
            <h4>Choose a map</h4>
            <div class="buttons map-buttons">
              <button
                :class="{ active: map === 'world' }"
                @click="map = 'world'"
              >
                World
              </button>
              <button
                :class="{ active: map === 'worldPacific' }"
                @click="map = 'worldPacific'"
              >
                World Pacific
              </button>
              <button
                :class="{ active: map === 'europe' }"
                @click="map = 'europe'"
              >
                Europe
              </button>
              <button
                :class="{ active: map === 'africa' }"
                @click="map = 'africa'"
              >
                Africa
              </button>
              <button
                :class="{ active: map === 'northAmerica' }"
                @click="map = 'northAmerica'"
              >
                North America
              </button>
            </div>
          </div>
          <div class="option" v-if="map === 'world' || map === 'worldPacific'">
            <h4>Select a region</h4>
            <div class="buttons">
              <button
                :class="{ active: preselected === 'CA' }"
                @click="preselected = 'CA'"
              >
                Canada
              </button>
              <button
                :class="{ active: preselected === 'PL' }"
                @click="preselected = 'PL'"
              >
                Poland
              </button>
              <button
                :class="{ active: preselected === 'NO' }"
                @click="preselected = 'NO'"
              >
                Norway
              </button>
              <button
                :class="{ active: preselected === 'RU' }"
                @click="preselected = 'RU'"
              >
                Russia
              </button>
              <button
                :class="{ active: preselected === 'US' }"
                @click="preselected = 'US'"
              >
                United States
              </button>
              <button
                :class="{ active: preselected === 'CL' }"
                @click="preselected = 'CL'"
              >
                Chile
              </button>
              <button
                :class="{ active: preselected === 'IN' }"
                @click="preselected = 'IN'"
              >
                India
              </button>
              <button
                :class="{ active: preselected === 'CN' }"
                @click="preselected = 'CN'"
              >
                China
              </button>
            </div>
          </div>
        </div>
        <div style="display: flex; flex-wrap: wrap;">
          <div class="option">
            <h4>Choose a background color:</h4>
            <div class="colors">
              <div
                :class="{ active: background === '#f44336' }"
                style="background-color: #f44336"
                @click="background = '#f44336'"
              ></div>
              <div
                :class="{ active: background === '#e91e63' }"
                style="background-color: #e91e63"
                @click="background = '#e91e63'"
              ></div>
              <div
                :class="{ active: background === '#9c27b0' }"
                style="background-color: #9c27b0"
                @click="background = '#9c27b0'"
              ></div>
              <div
                :class="{ active: background === '#673ab7' }"
                style="background-color: #673ab7"
                @click="background = '#673ab7'"
              ></div>
              <div
                :class="{ active: background === '#3f51b5' }"
                style="background-color: #3f51b5"
                @click="background = '#3f51b5'"
              ></div>
              <div
                :class="{ active: background === '#2196f3' }"
                style="background-color: #2196f3"
                @click="background = '#2196f3'"
              ></div>
              <div
                :class="{ active: background === '#90caf9' }"
                style="background-color: #90caf9"
                @click="background = '#90caf9'"
              ></div>
              <div
                :class="{ active: background === '#009688' }"
                style="background-color: #009688"
                @click="background = '#009688'"
              ></div>
              <div
                :class="{ active: background === '#8bc34a' }"
                style="background-color: #8bc34a"
                @click="background = '#8bc34a'"
              ></div>
              <div
                :class="{ active: background === '#aed581' }"
                style="background-color: #aed581"
                @click="background = '#aed581'"
              ></div>
              <div
                :class="{ active: background === '#ffc107' }"
                style="background-color: #ffc107"
                @click="background = '#ffc107'"
              ></div>
              <div
                :class="{ active: background === '#9e9e9e' }"
                style="background-color: #9e9e9e"
                @click="background = '#9e9e9e'"
              ></div>
              <div
                :class="{ active: background === '#45526e' }"
                style="background-color: #45526e"
                @click="background = '#45526e'"
              ></div>
              <div
                :class="{ active: background === '#fff' }"
                style="background-color: #fff"
                @click="background = '#fff'"
              ></div>
            </div>
          </div>
          <div class="option">
            <h4>Choose a fill color:</h4>
            <div class="colors">
              <div
                :class="{ active: fill === '#f44336' }"
                style="background-color: #f44336"
                @click="fill = '#f44336'"
              ></div>
              <div
                :class="{ active: fill === '#e91e63' }"
                style="background-color: #e91e63"
                @click="fill = '#e91e63'"
              ></div>
              <div
                :class="{ active: fill === '#9c27b0' }"
                style="background-color: #9c27b0"
                @click="fill = '#9c27b0'"
              ></div>
              <div
                :class="{ active: fill === '#673ab7' }"
                style="background-color: #673ab7"
                @click="fill = '#673ab7'"
              ></div>
              <div
                :class="{ active: fill === '#3f51b5' }"
                style="background-color: #3f51b5"
                @click="fill = '#3f51b5'"
              ></div>
              <div
                :class="{ active: fill === '#2196f3' }"
                style="background-color: #2196f3"
                @click="fill = '#2196f3'"
              ></div>
              <div
                :class="{ active: fill === '#90caf9' }"
                style="background-color: #90caf9"
                @click="fill = '#90caf9'"
              ></div>
              <div
                :class="{ active: fill === '#009688' }"
                style="background-color: #009688"
                @click="fill = '#009688'"
              ></div>
              <div
                :class="{ active: fill === '#8bc34a' }"
                style="background-color: #8bc34a"
                @click="fill = '#8bc34a'"
              ></div>
              <div
                :class="{ active: fill === '#aed581' }"
                style="background-color: #aed581"
                @click="fill = '#aed581'"
              ></div>
              <div
                :class="{ active: fill === '#ffc107' }"
                style="background-color: #ffc107"
                @click="fill = '#ffc107'"
              ></div>
              <div
                :class="{ active: fill === '#9e9e9e' }"
                style="background-color: #9e9e9e"
                @click="fill = '#9e9e9e'"
              ></div>
              <div
                :class="{ active: fill === '#45526e' }"
                style="background-color: #45526e"
                @click="fill = '#45526e'"
              ></div>
              <div
                :class="{ active: fill === '#fff' }"
                style="background-color: #fff"
                @click="fill = '#fff'"
              ></div>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap;">
          <div class="option">
            <h4>Choose a hover color:</h4>
            <div class="colors">
              <div
                :class="{ active: hover === '#f44336' }"
                style="background-color: #f44336"
                @click="hover = '#f44336'"
              ></div>
              <div
                :class="{ active: hover === '#e91e63' }"
                style="background-color: #e91e63"
                @click="hover = '#e91e63'"
              ></div>
              <div
                :class="{ active: hover === '#9c27b0' }"
                style="background-color: #9c27b0"
                @click="hover = '#9c27b0'"
              ></div>
              <div
                :class="{ active: hover === '#673ab7' }"
                style="background-color: #673ab7"
                @click="hover = '#673ab7'"
              ></div>
              <div
                :class="{ active: hover === '#3f51b5' }"
                style="background-color: #3f51b5"
                @click="hover = '#3f51b5'"
              ></div>
              <div
                :class="{ active: hover === '#2196f3' }"
                style="background-color: #2196f3"
                @click="hover = '#2196f3'"
              ></div>
              <div
                :class="{ active: hover === '#90caf9' }"
                style="background-color: #90caf9"
                @click="hover = '#90caf9'"
              ></div>
              <div
                :class="{ active: hover === '#009688' }"
                style="background-color: #009688"
                @click="hover = '#009688'"
              ></div>
              <div
                :class="{ active: hover === '#8bc34a' }"
                style="background-color: #8bc34a"
                @click="hover = '#8bc34a'"
              ></div>
              <div
                :class="{ active: hover === '#aed581' }"
                style="background-color: #aed581"
                @click="hover = '#aed581'"
              ></div>
              <div
                :class="{ active: hover === '#ffc107' }"
                style="background-color: #ffc107"
                @click="hover = '#ffc107'"
              ></div>
              <div
                :class="{ active: hover === '#9e9e9e' }"
                style="background-color: #9e9e9e"
                @click="hover = '#9e9e9e'"
              ></div>
              <div
                :class="{ active: hover === '#45526e' }"
                style="background-color: #45526e"
                @click="hover = '#45526e'"
              ></div>
              <div
                :class="{ active: hover === '#fff' }"
                style="background-color: #fff"
                @click="hover = '#fff'"
              ></div>
            </div>
          </div>
          <div class="option">
            <h4>Choose a selected color:</h4>
            <div class="colors">
              <div
                :class="{ active: selectColor === '#f44336' }"
                style="background-color: #f44336"
                @click="selectColor = '#f44336'"
              ></div>
              <div
                :class="{ active: selectColor === '#e91e63' }"
                style="background-color: #e91e63"
                @click="selectColor = '#e91e63'"
              ></div>
              <div
                :class="{ active: selectColor === '#9c27b0' }"
                style="background-color: #9c27b0"
                @click="selectColor = '#9c27b0'"
              ></div>
              <div
                :class="{ active: selectColor === '#673ab7' }"
                style="background-color: #673ab7"
                @click="selectColor = '#673ab7'"
              ></div>
              <div
                :class="{ active: selectColor === '#3f51b5' }"
                style="background-color: #3f51b5"
                @click="selectColor = '#3f51b5'"
              ></div>
              <div
                :class="{ active: selectColor === '#2196f3' }"
                style="background-color: #2196f3"
                @click="selectColor = '#2196f3'"
              ></div>
              <div
                :class="{ active: selectColor === '#90caf9' }"
                style="background-color: #90caf9"
                @click="selectColor = '#90caf9'"
              ></div>
              <div
                :class="{ active: selectColor === '#009688' }"
                style="background-color: #009688"
                @click="selectColor = '#009688'"
              ></div>
              <div
                :class="{ active: selectColor === '#8bc34a' }"
                style="background-color: #8bc34a"
                @click="selectColor = '#8bc34a'"
              ></div>
              <div
                :class="{ active: selectColor === '#aed581' }"
                style="background-color: #aed581"
                @click="selectColor = '#aed581'"
              ></div>
              <div
                :class="{ active: selectColor === '#ffc107' }"
                style="background-color: #ffc107"
                @click="selectColor = '#ffc107'"
              ></div>
              <div
                :class="{ active: selectColor === '#9e9e9e' }"
                style="background-color: #9e9e9e"
                @click="selectColor = '#9e9e9e'"
              ></div>
              <div
                :class="{ active: selectColor === '#45526e' }"
                style="background-color: #45526e"
                @click="selectColor = '#45526e'"
              ></div>
              <div
                :class="{ active: selectColor === '#fff' }"
                style="background-color: #fff"
                @click="selectColor = '#fff'"
              ></div>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap;">
          <div class="option">
            <h4>Choose a stroke color:</h4>
            <div class="colors">
              <div
                :class="{ active: stroke === '#f44336' }"
                style="background-color: #f44336"
                @click="stroke = '#f44336'"
              ></div>
              <div
                :class="{ active: stroke === '#e91e63' }"
                style="background-color: #e91e63"
                @click="stroke = '#e91e63'"
              ></div>
              <div
                :class="{ active: stroke === '#9c27b0' }"
                style="background-color: #9c27b0"
                @click="stroke = '#9c27b0'"
              ></div>
              <div
                :class="{ active: stroke === '#673ab7' }"
                style="background-color: #673ab7"
                @click="stroke = '#673ab7'"
              ></div>
              <div
                :class="{ active: stroke === '#3f51b5' }"
                style="background-color: #3f51b5"
                @click="stroke = '#3f51b5'"
              ></div>
              <div
                :class="{ active: stroke === '#2196f3' }"
                style="background-color: #2196f3"
                @click="stroke = '#2196f3'"
              ></div>
              <div
                :class="{ active: stroke === '#90caf9' }"
                style="background-color: #90caf9"
                @click="stroke = '#90caf9'"
              ></div>
              <div
                :class="{ active: stroke === '#009688' }"
                style="background-color: #009688"
                @click="stroke = '#009688'"
              ></div>
              <div
                :class="{ active: stroke === '#8bc34a' }"
                style="background-color: #8bc34a"
                @click="stroke = '#8bc34a'"
              ></div>
              <div
                :class="{ active: stroke === '#aed581' }"
                style="background-color: #aed581"
                @click="stroke = '#aed581'"
              ></div>
              <div
                :class="{ active: stroke === '#ffc107' }"
                style="background-color: #ffc107"
                @click="stroke = '#ffc107'"
              ></div>
              <div
                :class="{ active: stroke === '#9e9e9e' }"
                style="background-color: #9e9e9e"
                @click="stroke = '#9e9e9e'"
              ></div>
              <div
                :class="{ active: stroke === '#45526e' }"
                style="background-color: #45526e"
                @click="stroke = '#45526e'"
              ></div>
              <div
                :class="{ active: stroke === '#fff' }"
                style="background-color: #fff"
                @click="stroke = '#fff'"
              ></div>
            </div>
          </div>
          <div class="option">
            <h4>Choose a stroke width</h4>
            <div class="stroke-width">
              <div @click="width = 0.5"><div style="width: 1px;"></div></div>
              <div @click="width = 1"><div style="width: 2px;"></div></div>
              <div @click="width = 1.5"><div style="width: 3px;"></div></div>
              <div @click="width = 2"><div style="width: 4px;"></div></div>
              <div @click="width = 3"><div style="width: 5px;"></div></div>
              <div @click="width = 4"><div style="width: 6px;"></div></div>
              <div @click="width = 5"><div style="width: 8px;"></div></div>
              <div @click="width = 6"><div style="width: 10px;"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="demo-section">
      <h3>Data from API - custom colors</h3>
      <section>
        <mdb-vector-map
          :legend="legend"
          stroke="black"
          hover-fill="white"
          select-fill="rgba(0, 0, 0, 0.3)"
          fill="white"
          :strokeWidth="0.4"
          :options="mapOptions"
          @select="selected = $event"
        />
        <div
          class="country-preview"
          v-if="selected"
          v-html="mapOptions[selected].tooltip"
        ></div>
      </section>
    </section>

    <section class="demo-section">
      <h3>Custom maps - Iceland</h3>
      <section>
        <mdb-vector-map
          :map="iceland.map"
          :view-box="iceland.viewbox"
          background-color="#82b1ff"
          stroke="#82b1ff"
          fill="#e3f2fd"
          select-fill="#fff"
          hover-fill="#fff"
        />
       </section>
    </section>
  </div>
</template>

<script>
import mdbVectorMap from "mdb-vector-map";
import axios from "axios";
import iceland from "../../maps/is";

export default {
  name: "HelloWorld",
  components: {
    mdbVectorMap
  },
  data() {
    return {
      iceland: iceland,
      map: "world",
      selected: null,
      fill: "#90caf9",
      width: 2,
      stroke: "#fff",
      hover: "#2196f3",
      selectColor: "#2196f3",
      background: "#fff",
      preselected: "CN",
      mapOptions: {},
      legend: {
        title: "Population density",
        colorCode: [
          {
            color: "#e8f5e9",
            text: "< 20"
          },
          {
            color: "#c8e6c9",
            text: "< 50"
          },
          {
            color: "#a5d6a7",
            text: "< 100"
          },
          {
            color: "#81c784",
            text: "< 200"
          },
          {
            color: "#66bb6a",
            text: "< 300"
          },
          {
            color: "#43a047",
            text: "< 1000"
          },
          {
            color: "#43a047",
            text: "> 1000"
          }
        ]
      }
    };
  },
  mounted() {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      let countries = response.data;

      countries.forEach(country => {
        let tooltip = `
        <img src="${country.flag}" style="width: 30px;"/>
        <br/>
        <strong>${country.name} <br/></strong> 
        Capital: ${country.capital} <br/> 
        Population: ${country.population}`;

        let density = country.population / country.area;
        let color =
          density < 20
            ? "#e8f5e9"
            : density < 50
            ? "#c8e6c9"
            : density < 100
            ? "#a5d6a7"
            : density < 200
            ? "#81c784"
            : density < 300
            ? "#66bb6a"
            : density < 1000
            ? "#43a047"
            : "#43a047";

        this.mapOptions[country.alpha2Code] = {
          fill: color,
          tooltip
        };
      });


    });
  },
};
</script>

<style scoped>
.preview {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
}

.preview-window {
  height: 80vh; 
  margin-top: 20px;
}

@media (min-width: 600px) {
  .demo-section {
    padding: 30px;
  }

  .toolbar .option {
    flex-basis: 45%;
  }

  .preview-window {
  height: 60vh; 
  margin-top: 50px;
}
}

.demo-section h4 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 2;
}

.demo-section section {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.country-preview {
  line-height: 1.5;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
}

.toolbar {
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.toolbar .option {
  margin: 0 10px;
  padding: 10px;
}

.toolbar h4 {
  border: none;
  margin-bottom: 10px;
  margin-top: 0px;
}

.buttons {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.buttons button {
  padding: 10px;
  border-radius: 17px;
  font-size: 12px;
  background-color: #2196f3;
  color: white;
  text-transform: uppercase;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.3s linear;
  border: none;
  outline: none;
  margin: 10px 10px 10px 0;
  cursor: pointer;
}

.map-buttons button {
  background-color: #90caf9;
}

.colors {
  display: flex;
  flex-wrap: wrap;
}
.colors div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.buttons button:focus,
.buttons .active,
.colors .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4), 0 2px 10px 0 rgba(0, 0, 0, 0.4);
}

.buttons button:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3), 0 2px 10px 0 rgba(0, 0, 0, 0.3);
}

.stroke-width {
  display: flex;
}

.stroke-width div {
  width: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.stroke-width div div {
  height: 20px;
  background-color: black;
}
</style>
