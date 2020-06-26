<template>
  <div id="app">
    <div class="top-bar"></div>
    <div class="container" :class="getContainerClass">
      <router-view />
      <div class="white-space"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Footer
  },
  computed: {
    getContainerClass: function() {
      return this.$route.params.nickname ? "grid-player" : "grid-home";
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/app.scss";
</style>
