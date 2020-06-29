<template>
  <div class="section" id="elo">
    <template v-if="this.getData.loading">
      <content-loader
        :height="100"
        :width="800"
        :speed="2"
        primaryColor="#f3f3f3"
        secondaryColor="#008000"
      >
        <rect x="17" y="21" rx="3" ry="3" width="749" height="13.7" />
        <rect x="42" y="47.1" rx="3" ry="3" width="171" height="2.88" />
        <rect x="244.49" y="47.1" rx="3" ry="3" width="504.51" height="2.88" />
      </content-loader>
    </template>
    <div v-else>
      <h2 class="section-heading">
        Postęp
        <span>ELO</span>
      </h2>
      <div class="elo-bar">
        <progress class="elo-bar__progress" max="2149" :value="getData.data.faceit_elo"></progress>
        <div class="elo-bar__legend">
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl1">
            <img :src="getLvlImg(1)" alt="1st lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">0-800</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(2)" alt="2nd lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">801-950</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(3)" alt="3rd lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">951-1100</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(4)" alt="4th lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">1101-1250</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(5)" alt="5th lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">1251-1400</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(6)" alt="6th lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">1401-1550</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(7)" alt="7th lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">1551-1700</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(8)" alt="8th lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">1701-1850</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(9)" alt="9th lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">1851-2000</span>
          </div>
          <div class="separator"></div>
          <div class="elo-bar__legend__item elo-bar__legend__item--lvl2-10">
            <img :src="getLvlImg(10)" alt="10th lvl" class="elo-bar__legend__item__img" />
            <span class="elo-bar__legend__item__caption">2001+</span>
          </div>
        </div>
      </div>
      <apexchart height="400px" id="chart" type="line" :options="options" :series="series" />
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";

export default {
  name: "EloProgress",
  components: {
    apexchart: VueApexCharts,
    ContentLoader
  },
  methods: {
    getLvlImg: function(lvl) {
      return require(`../assets/img/lvls/skill_level_${lvl}_svg.svg`);
    }
  },
  computed: {
    ...mapGetters(["getData"]),
    series: function() {
      return [
        {
          name: "ELO",
          data: this.getData.data.lastMatches.map(match => match.elo).reverse()
        }
      ];
    },
    options: function() {
      return {
        chart: {
          id: "elo-history",
          toolbar: {
            show: false
          },
          width: "100%",
          zoom: {
            enabled: false
          }
        },
        colors: ["#69b578"],
        dataLabels: {
          enabled: false
        },
        xaxis: {
          labels: {
            style: {
              colors: "#bbb"
            }
          },
          categories: this.getData.data.lastMatches
            .map(match => match.map)
            .reverse()
        },
        yaxis: {
          labels: {
            style: {
              colors: "#bbb"
            }
          }
        },
        annotations: {
          yaxis: [
            {
              y: 951,
              borderColor: "#3a7d44",
              strokeDashArray: 0,
              label: {
                borderColor: "#3a7d44",
                style: {
                  color: "#fff",
                  background: "#3a7d44",
                  fontWeight: 700
                },
                text: "3 lvl"
              }
            },
            {
              y: 1101,
              borderColor: "#3a7d44",
              strokeDashArray: 0,
              label: {
                borderColor: "#3a7d44",
                style: {
                  color: "#fff",
                  background: "#3a7d44",
                  fontWeight: 700
                },
                text: "4 lvl"
              }
            },
            {
              y: 1251,
              borderColor: "#3a7d44",
              strokeDashArray: 0,
              label: {
                borderColor: "#3a7d44",
                style: {
                  color: "#fff",
                  background: "#3a7d44",
                  fontWeight: 700
                },
                text: "5 lvl"
              }
            },
            {
              y: 1401,
              borderColor: "#3a7d44",
              strokeDashArray: 0,
              label: {
                borderColor: "#3a7d44",
                style: {
                  color: "#fff",
                  background: "#3a7d44",
                  fontWeight: 700
                },
                text: "6 lvl"
              }
            },
            {
              y: 1551,
              borderColor: "#3a7d44",
              strokeDashArray: 0,
              label: {
                borderColor: "#3a7d44",
                style: {
                  color: "#fff",
                  background: "#3a7d44",
                  fontWeight: 700
                },
                text: "7 lvl"
              }
            },
            {
              y: 1701,
              borderColor: "#3a7d44",
              strokeDashArray: 0,
              label: {
                borderColor: "#3a7d44",
                style: {
                  color: "#fff",
                  background: "#3a7d44",
                  fontWeight: 700
                },
                text: "8 lvl"
              }
            },
            {
              y: 1851,
              borderColor: "#3a7d44",
              strokeDashArray: 0,
              label: {
                borderColor: "#3a7d44",
                style: {
                  color: "#fff",
                  background: "#3a7d44",
                  fontWeight: 700
                },
                text: "9 lvl"
              }
            },
            {
              y: 2001,
              borderColor: "#3a7d44",
              strokeDashArray: 0,
              label: {
                borderColor: "#3a7d44",
                style: {
                  color: "#fff",
                  background: "#3a7d44",
                  fontWeight: 700
                },
                text: "10 lvl"
              }
            }
          ]
        },
        stroke: {
          curve: "smooth"
        },
        tooltip: {
          theme: "dark"
        },
        markers: {
          size: 5,
          colors: "#3a7d44",
          strokeColors: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          showNullDataPoints: true,
          hover: {
            size: undefined,
            sizeOffset: 3
          }
        }
      };
    }
  }
};
</script>