<template>
  <div>
    <ul>
      <li v-for="c in filteredCards" :key="c.id">{{c.name}}</li>
    </ul>
    <div>filters: {{filters}}</div>
    <div>
      card type
      <category-filter category="type" :values="cardTypes" @add-filter="addFilter" />
    </div>
    <div>
      building tag:
      <category-filter category="building tag" :values="buildingTags" @add-filter="addFilter" />
    </div>
    <button @click="this.clearFilters">Clear Filters</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CategoryFilter from "@/components/CategoryFilter";

export default {
  name: "card-list",
  components: {
    CategoryFilter
  },
  data() {
    return {
      filters: [],
      cardTypes: ["automated", "active", "event"],
      buildingTags: [
        "power",
        "building",
        "city",
        "event",
        "space",
        "jove",
        "venus",
        "animal",
        "microbe",
        "plant",
        "science"
      ]
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
    addFilter(filter) {
      this.filters.push(filter);
    },
    clearFilters() {
      this.filters = [];
    },
    buildFilter(filters) {
      let funcs = this._.map(filters, this.buildFilterFunc);
      return c => {
        return this._.every(funcs, f => f(c));
      };
    },
    buildFilterFunc(filter) {
      if (filter.category) {
        return this.buildCategoryTagFilter(filter);
      } else {
        console.log("unknown filter");
      }
    },
    buildCategoryTagFilter(filter) {
      return c =>
        this._.some(
          c.tags,
          t => t.name == filter.category.tag && t.value == filter.category.value
        );
    }
  }
};
</script>