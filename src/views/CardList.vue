<template>
  <div>
    <category-filter
      description="Card Type"
      category="type"
      :values="cardTypes"
      @add-filter="addFilter"
    />
    <category-filter
      description="Building Tag"
      category="building tag"
      :values="buildingTags"
      @add-filter="addFilter"
    />
    <existence-filter description="Is an Action" type="action" @add-filter="addFilter" />
    <filter-list :filters="filters" @remove-filter="removeFilter" />
    <button @click="this.clearFilters">Clear Filters</button>
    <hr />
    <h4>Cards: {{filteredCards.length}}</h4>
    <ul>
      <li v-for="c in filteredCards" :key="c.id">{{c.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CategoryFilter from "@/components/CategoryFilter";
import ExistenceFilter from "@/components/ExistenceFilter";
import FilterList from "@/components/FilterList";

export default {
  name: "card-list",
  components: {
    CategoryFilter,
    ExistenceFilter,
    FilterList
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
      } else if (filter.has) {
        return this.buildExistsFilter(filter);
      } else if (filter.doesntHave) {
        return this.buildDoesntExistFilter(filter);
      } else {
        console.log("unknown filter");
        return () => true;
      }
    },
    buildCategoryTagFilter(filter) {
      return c =>
        this._.some(
          c.tags,
          t => t.name == filter.category.tag && t.value == filter.category.value
        );
    },
    buildExistsFilter(filter) {
      return c => this._.some(c.tags, t => t.name == filter.has.tag && t.value);
    },
    buildDoesntExistFilter(filter) {
      return c => this._.every(c.tags, t => t.name != filter.doesntHave.tag);
    },
    removeFilter(i) {
      this.filters.splice(i, 1);
    }
  }
};
</script>