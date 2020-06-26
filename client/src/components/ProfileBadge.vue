<template>
  <div class="profile-card">
    <div class="profile-card__user">
      <div class="profile-card__avatar">
        <img src="img/Maciek.jpg" alt="user avatar" />
      </div>
      <div class="profile-card__info">
        <h3 class="profile-card__info__nickname">MientusM</h3>
        <div class="profile-card__info__last-results--container">
          <p class="profile-card__info__last-results--heading">Ostatnie wyniki</p>
          <p class="profile-card__info__last-results">
            <span class="last-result last-result--win">W</span>
            <span class="last-result last-result--win">W</span>
            <span class="last-result last-result--loss">L</span>
            <span class="last-result last-result--loss">L</span>
            <span class="last-result last-result--win">W</span>
          </p>
        </div>
      </div>
    </div>
    <div class="profile-card__lvl">
      <img src="img/skill_level_6_svg.svg" alt="6th level" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBadge"
};
</script>