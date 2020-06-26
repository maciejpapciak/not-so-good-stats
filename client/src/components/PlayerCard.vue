<template>
  <div class="section" id="profile">
    <ProfileBadge />
    <div class="profile-stats">
      <ul class="profile-stats__list">
        <li class="profile-stats__list-item">
          <h4 class="profile-stats__item-heading">K/D Ratio</h4>
          <p class="profile-stats__item-value">1.21</p>
        </li>
        <div class="separator"></div>
        <li class="profile-stats__list-item">
          <h4 class="profile-stats__item-heading">Rozegrane mecze</h4>
          <p class="profile-stats__item-value">349</p>
        </li>
        <div class="separator"></div>
        <li class="profile-stats__list-item">
          <h4 class="profile-stats__item-heading">Wygrane</h4>
          <p class="profile-stats__item-value">52 %</p>
        </li>
        <div class="separator"></div>
        <li class="profile-stats__list-item">
          <h4 class="profile-stats__item-heading">ELO</h4>
          <p class="profile-stats__item-value">1530</p>
        </li>
        <div class="separator"></div>
        <li class="profile-stats__list-item">
          <h4 class="profile-stats__item-heading">Headshot</h4>
          <p class="profile-stats__item-value">38 %</p>
        </li>
      </ul>
    </div>
    <div class="profile-links">
      <a href="#" class="btn btn--steam" target="_blank">
        <img :src="images.steam" alt="Steam logo" />
        Profil Steam
      </a>
      <a href="#" class="btn btn--faceit" target="_blank">
        <img :src="images.faceit" alt="Faceit logo" />
        Profil Faceit
      </a>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>