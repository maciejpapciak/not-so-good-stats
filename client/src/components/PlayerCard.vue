<template>
  <div class="section" id="profile">
    <template v-if="this.getData.loading">
      <content-loader
        :height="150"
        :width="400"
        :speed="2"
        primaryColor="#295730"
        secondaryColor="#008000"
      >
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
        <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
        <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
        <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
        <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
        <circle cx="30" cy="30" r="30" />
      </content-loader>
      <transition
        enter-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <div class="loader-overlay" v-if="this.getData.loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </transition>
    </template>
    <div v-else-if="Object.keys(this.getData.error).length === 0">
      <ProfileBadge
        :avatar="getData.data.avatar"
        :nickname="getData.data.nickname"
        :lastResults="getData.data.stats['Recent Results']"
        :lvl="getData.data.skill_level"
      />
      <div class="profile-stats">
        <ul class="profile-stats__list">
          <li class="profile-stats__list-item">
            <h4 class="profile-stats__item-heading">K/D Ratio</h4>
            <p class="profile-stats__item-value">{{ getData.data.stats["Average K/D Ratio"] }}</p>
          </li>
          <div class="separator"></div>
          <li class="profile-stats__list-item">
            <h4 class="profile-stats__item-heading">Rozegrane mecze</h4>
            <p class="profile-stats__item-value">{{ getData.data.stats["Matches"] }}</p>
          </li>
          <div class="separator"></div>
          <li class="profile-stats__list-item">
            <h4 class="profile-stats__item-heading">Wygrane</h4>
            <p class="profile-stats__item-value">{{ `${getData.data.stats["Win Rate %"]} %` }}</p>
          </li>
          <div class="separator"></div>
          <li class="profile-stats__list-item">
            <h4 class="profile-stats__item-heading">ELO</h4>
            <p class="profile-stats__item-value">{{ getData.data.faceit_elo }}</p>
          </li>
          <div class="separator"></div>
          <li class="profile-stats__list-item">
            <h4 class="profile-stats__item-heading">Headshot %</h4>
            <p class="profile-stats__item-value">{{ getData.data.stats["Average Headshots %"] }}</p>
          </li>
        </ul>
      </div>
      <div class="profile-links">
        <a
          :href="`https://steamcommunity.com/profiles/${getData.data.steam_id_64}`"
          class="btn btn--steam"
          target="_blank"
        >
          <img :src="images.steam" alt="Steam logo" />
          Profil Steam
        </a>
        <a
          :href="`https://www.faceit.com/pl/players/${getData.data.nickname}`"
          class="btn btn--faceit"
          target="_blank"
        >
          <img :src="images.faceit" alt="Faceit logo" />
          Profil Faceit
        </a>
      </div>
    </div>
    <div v-else class="error">
      <img class="error__img" :src="images.chicken" alt="Error chicken" />
      <div class="error__caption">
        <h2 class="section-heading">
          Wystąpił
          <span>błąd</span>
        </h2>
        <p>{{this.getData.error}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ContentLoader } from "vue-content-loader";
import ProfileBadge from "./ProfileBadge";

export default {
  name: "PlayerCard",
  components: {
    ProfileBadge,
    ContentLoader
  },
  data() {
    return {
      images: {
        steam: require("../assets/img/icons/steam-symbol.png"),
        faceit: require("../assets/img/icons/Black_Pheasant.svg"),
        chicken: require("../assets/img/chicken.png")
      }
    };
  },
  computed: {
    ...mapGetters(["getData"])
  }
};
</script>