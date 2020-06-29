<template>
  <div class="section" id="match-history">
    <h2 class="section-heading">
      Historia
      <span>meczy</span>
    </h2>
    <table class="match-history">
      <tr class="match-history__row match-history__row--head">
        <th>Rezultat</th>
        <th>Data</th>
        <th>Wynik</th>
        <th>K - A - D (KDR)</th>
        <th>ELO</th>
        <th>Mapa</th>
        <th>Drużyna</th>
      </tr>
      <template v-for="(match, index) in this.getData.data.lastMatches">
        <tr :key="match.date" v-if="getData.data.lastMatches[index + 1]" class="match-history__row">
          <td>
            <span
              class="match-history__badge"
              :class="{'match-history__badge--red' : match.result=='Loss', 'match-history__badge--green' : match.result=='Win'}"
            >{{ match.result }}</span>
          </td>
          <td>{{ getDate(match.date) }}</td>
          <td>{{ match.score }}</td>
          <td>
            <span
              class="match-history__badge match-history__badge--wide"
              :class="{'match-history__badge--red' : match.kdRatio<1.0, 'match-history__badge--green' : match.kdRatio>=1.0}"
            >
              {{ `${match.kills} - ${match.assists} - ${
              match.deaths
              } (${match.kdRatio})` }}
            </span>
          </td>
          <td>{{ match.elo ? `${match.elo} (${calcEloDiff(parseInt(index))})` : `¯\\_(ツ)_/¯` }}</td>
          <td>{{ match.map }}</td>
          <td>{{ match.team }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MatchHistory",
  computed: {
    ...mapGetters(["getData"])
  },
  methods: {
    getDate: function(date) {
      let formattedDate = new Date(date);
      return `${
        formattedDate.getDate() < 10
          ? "0" + formattedDate.getDate()
          : formattedDate.getDate()
      }.${
        formattedDate.getMonth() < 10
          ? "0" + formattedDate.getMonth()
          : formattedDate.getMonth()
      }.${
        formattedDate.getFullYear() < 10
          ? "0" + formattedDate.getFullYear()
          : formattedDate.getFullYear()
      } ${formattedDate.getHours()}:${
        formattedDate.getMinutes() < 10
          ? "0" + formattedDate.getMinutes()
          : formattedDate.getMinutes()
      }`;
    },
    calcEloDiff(index) {
      if (this.getData.data.lastMatches[index + 1]) {
        let current = this.getData.data.lastMatches[index].elo;
        let previous = this.getData.data.lastMatches[index + 1].elo;
        if (current - previous < 0) return `-${Math.abs(current - previous)}`;
        else return `+${Math.abs(current - previous)}`;
      }
    }
  }
};
</script>