<template>
  <div id="app">
    <div class="top-bar"></div>
    <div class="container" :class="getContainerClass">
      <transition
        enter-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view :key="$route.params.nickname" />
      </transition>
      <TeamMembers />
      <div class="white-space"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import TeamMembers from "./components/TeamMembers";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Footer,
    TeamMembers
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    getContainerClass: function() {
      return this.$route.params.nickname ? "grid-player" : "grid-home";
    }
  },
  methods: {
    ...mapActions(["fetchTeamMember"]),
    ...mapMutations(["setLoadingStatus"])
  },
  mounted() {
    const nsgtIds = [
      "dc483a07-2ba9-4147-9b6a-170739046213",
      "8f36179c-202b-4ac5-8cad-311f9451189b",
      "b4cbee31-96d9-4458-8b9a-d5b8e763a1af",
      "fa1b4775-c887-4af1-bd67-72c0e2b98a17",
      "9d09c1f6-f132-4476-9a40-fa2b90d7a49a",
      "a1dd5d16-f1b2-4608-9dbb-a4e1eea2dd6b"
    ];
    nsgtIds.forEach(id => this.fetchTeamMember(id));
  }
};
</script>

<style lang="scss">
@import "assets/scss/app.scss";
</style>
