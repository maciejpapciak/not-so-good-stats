<template>
  <div class="section" id="search-form">
    <h2 class="section-heading">
      Wprowadź swój nick z
      <span>Faceita</span>
    </h2>
    <form class="search-form">
      <input type="text" required class="search-form__input" />
      <button type="submit" class="btn search-form__btn">Szukaj</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm"
};
</script>