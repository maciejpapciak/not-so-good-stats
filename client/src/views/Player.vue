<template>
  <fragment>
    <Header />
    <SearchForm />
    <TeamMembers />
    <PlayerCard />
    <EloProgress />
  </fragment>
</template>

<script>
import { mapActions } from "vuex";

import Header from "@/components/Header.vue";
import SearchForm from "@/components/SearchForm.vue";
import TeamMembers from "@/components/TeamMembers.vue";
import PlayerCard from "@/components/PlayerCard.vue";
import EloProgress from "@/components/EloProgress.vue";

export default {
  name: "Home",
  components: {
    SearchForm,
    Header,
    TeamMembers,
    PlayerCard,
    EloProgress
  },
  methods: mapActions(["fetchPlayerData"]),
  mounted() {
    this.fetchPlayerData(this.$route.params.nickname);
  }
};
</script>
