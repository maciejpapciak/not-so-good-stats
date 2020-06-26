<template>
  <div class="section" id="nsgt">
    <h2 class="section-heading">
      Not So Good
      <span>Team</span>
    </h2>
    <ul class="team-members">
      <li class="team-members__item">
        <a href="#">
          <ProfileBadge />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import ProfileBadge from "./ProfileBadge";

export default {
  name: "TeamMembers",
  components: {
    ProfileBadge
  }
};
</script>