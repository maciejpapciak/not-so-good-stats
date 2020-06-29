<template>
  <div class="section" id="nsgt">
    <h2 class="section-heading">
      Not So Good
      <span>Team</span>
    </h2>
    <ul class="team-members">
      <li :key="index" v-for="(member, index) in this.getTeamList.data" class="team-members__item">
        <router-link :to="`/${member.nickname}`">
          <ProfileBadge
            :avatar="member.avatar"
            :nickname="member.nickname"
            :lastResults="member.recentResults"
            :lvl="member.skill_level"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileBadge from "./ProfileBadge";

export default {
  name: "TeamMembers",
  components: {
    ProfileBadge
  },
  props: ["loading"],
  computed: {
    ...mapGetters(["getTeamList"])
  }
};
</script>