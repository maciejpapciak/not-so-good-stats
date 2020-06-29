<template>
  <fragment>
    <Header />
    <SearchForm />
  </fragment>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: "Home",
  components: {
    Header,
    SearchForm
  }
};
</script>
