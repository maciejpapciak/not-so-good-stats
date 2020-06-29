<template>
  <div class="profile-card">
    <div class="profile-card__user">
      <div v-if="avatar" class="profile-card__avatar">
        <img :src="avatar" alt="user avatar" />
      </div>
      <div v-else class="profile-card__avatar">
        <img :src="this.defaultAvatar" alt="user avatar" />
      </div>
      <div class="profile-card__info">
        <h3 class="profile-card__info__nickname">{{ nickname }}</h3>
        <div v-if="lastResults" class="profile-card__info__last-results--container">
          <p class="profile-card__info__last-results--heading">Ostatnie wyniki</p>
          <p class="profile-card__info__last-results">
            <template v-for="(result, index) in lastResults">
              <span
                :key="index"
                class="last-result"
                :class="{
                  'last-result--win': result == '1',
                  'last-result--loss': result == '0'
                }"
              >{{ determineLastResult(result) }}</span>
            </template>
          </p>
        </div>
      </div>
    </div>
    <div class="profile-card__lvl">
      <img :src="getPlayerLvl" :alt="lvl + ' lvl'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBadge",
  data() {
    return {
      defaultAvatar: require("../assets/img/defaultAvatar.jpg")
    };
  },
  props: {
    avatar: String,
    nickname: String,
    lastResults: Array,
    lvl: Number
  },
  methods: {
    determineLastResult(result) {
      if (result == "1") return "W";
      else if (result == "0") return "L";
      else return "";
    }
  },
  computed: {
    getPlayerLvl: function() {
      return require(`../assets/img/lvls/skill_level_${this.$props.lvl}_svg.svg`);
    }
  }
};
</script>