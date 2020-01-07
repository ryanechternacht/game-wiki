<template>
  <div>
    <ul>
      <li v-for="c in filteredCards" :key="c.id">{{c.name}}</li>
    </ul>
    <div>{{filters}}</div>
    <button @click="this.filterByBuildingTags">Filter By Building Tags</button>
    <button @click="this.clearFilters">Clear Filters</button>
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
      let filter = this.buildFilter(this.filters);
      return _.filter(this.cards, filter);
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
    buildFilter(filters) {
      let funcs = this._.map(filters, this.buildFilterFunc);
      return c => {
        return this._.some(funcs, f => f(c));
      };
    },
    buildFilterFunc(filter) {
      return c => {
        return this._.some(c.tags, t => {
          return t.name == "building tag" && t.value == "building";
        });
      };
    }
  }
};
</script>