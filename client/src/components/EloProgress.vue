<template>
  <div class="section" id="elo">
    <div v-if="getData.loading">Ładowanie</div>
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
      <!-- <div id="chart"></div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EloProgress",
  methods: {
    getLvlImg: function(lvl) {
      return require(`../assets/img/lvls/skill_level_${lvl}_svg.svg`);
    }
  },
  computed: mapGetters(["getData"])
};
</script>