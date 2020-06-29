<template>
  <fragment>
    <Header />
    <SearchForm />
    <PlayerCard />
    <template v-if="Object.keys(this.getData.error).length === 0">
      <EloProgress />
      <MatchHistory />
    </template>
  </fragment>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Header from "@/components/Header.vue";
import SearchForm from "@/components/SearchForm.vue";
import PlayerCard from "@/components/PlayerCard.vue";
import EloProgress from "@/components/EloProgress.vue";
import MatchHistory from "@/components/MatchHistory.vue";

export default {
  name: "Home",
  components: {
    Header,
    SearchForm,
    PlayerCard,
    EloProgress,
    MatchHistory
  },
  methods: mapActions(["fetchPlayerData"]),
  mounted() {
    this.fetchPlayerData(this.$route.params.nickname);
  },
  computed: mapGetters(["getData"])
};
</script>
