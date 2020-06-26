<template>
  <div class="section" id="profile">
    <div v-if="getData.data.nickname">
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
    <div v-if="getData.loading">Ładowanie</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileBadge from "./ProfileBadge";

export default {
  name: "PlayerCard",
  components: {
    ProfileBadge
  },
  data() {
    return {
      images: {
        steam: require("../assets/img/icons/steam-symbol.png"),
        faceit: require("../assets/img/icons/Black_Pheasant.svg")
      }
    };
  },
  computed: {
    ...mapGetters(["getData"])
  }
};
</script>