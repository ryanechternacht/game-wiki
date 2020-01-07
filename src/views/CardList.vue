<template>
  <div>
    <ul>
      <li v-for="c in filteredCards" :key="c.id">{{c.name}}</li>
    </ul>
    <div>{{filters}}</div>
    <button @click="this.filterByBuildingTags">Filter By Building Tags</button>
    <button @click="this.clearFilters">Filter By Building Tags</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "card-list",
  data() {
    return {
      filters: []
    };
  },
  computed: {
    ...mapState({
      cards: state => state.cards
    }),
    filteredCards() {
      if (!this.filters.length) {
        return this.cards;
      }
      let filter = this.buildFilterObject(this.filters);
      return this._.filter(this.cards, c => {
        // only building tag right now
        return this._.some(c.tags, t => {
          return t.name == "building tag" && t.value == "building";
        });
      });
    }
  },
  methods: {
    filterByBuildingTags() {
      this.filters.push({
        has: {
          tag: "building tag",
          value: "building"
        }
      });
    },
    clearFilters() {
      this.filters = [];
    },
    buildFilterObject(filters) {
      return filters.length
        ? [
            {
              buildingTag: true
            }
          ]
        : [];
    }
  }
};
</script>