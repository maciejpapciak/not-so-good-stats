<template>
  <div class="section" id="search-form">
    <h2 class="section-heading">
      Wprowadź swój nick z
      <span>Faceita</span>
    </h2>
    <form @submit.prevent="submitForm" class="search-form">
      <input v-model.trim="query" type="text" required class="search-form__input" />
      <button type="submit" class="btn search-form__btn">Szukaj</button>
    </form>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "SearchForm",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    submitForm: function() {
      if (this.query) {
        router.replace({ name: "Player", params: { nickname: this.query } });
      } else {
        this.$toast.error("Musisz wprowadzić nick", {
          position: "top-left",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        });
      }
    }
  }
};
</script>