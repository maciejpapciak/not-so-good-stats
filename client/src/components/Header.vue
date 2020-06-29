<template>
  <header class="main-header">
    <img class="logo" :src="img" alt="NSGS Logo" />
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      img: require("../assets/img/logo.png")
    };
  }
};
</script>
