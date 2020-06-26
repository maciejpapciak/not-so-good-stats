<template>
  <fragment>
    <Header />
    <SearchForm />
    <TeamMembers />
    <PlayerCard />
  </fragment>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchForm from "@/components/SearchForm.vue";
import TeamMembers from "@/components/TeamMembers.vue";
import PlayerCard from "@/components/PlayerCard.vue";

export default {
  name: "Home",
  components: {
    SearchForm,
    Header,
    TeamMembers,
    PlayerCard
  }
};
</script>
