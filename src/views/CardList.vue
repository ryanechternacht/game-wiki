<template>
  <div>
    <h3>Filter Cards</h3>

    <div class="header-row inline chip-height">
      Active Filters:
      <div class="inline">
        <filter-list :filters="filters" @remove-filter="removeFilter" />
      </div>
    </div>

    <div class="header-row">
      <category-filter
        description="Card Type"
        category="type"
        :values="cardTypes"
        @add-filter="addFilter"
      />
    </div>
    <div class="header-row">
      <category-filter
        description="Building Tag"
        category="building tag"
        :values="buildingTags"
        @add-filter="addFilter"
      />
    </div>
    <div class="header-row">
      <existence-filter description="Is an Action" type="action" @add-filter="addFilter" />
    </div>

    <div class="header-row">
      <b-button @click="this.clearFilters" variant="primary">Clear Filters</b-button>
    </div>

    <hr />

    <div>
      <h4>Cards: {{filteredCards.length}}</h4>
      <ul>
        <li v-for="c in filteredCards" :key="c.id">{{c.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CategoryFilter from "@/components/card-list/CategoryFilter";
import ExistenceFilter from "@/components/card-list/ExistenceFilter";
import FilterList from "@/components/card-list/FilterList";

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
  created() {
    this.fetchCards();
  },
  computed: {
    ...mapGetters("cards", ["cards"]),
    filteredCards() {
      if (!this.filters.length) {
        return this.cards;
      }
      let filter = this.buildFilter(this.filters);
      return this._.filter(this.cards, filter);
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
    },
    ...mapActions("cards", ["fetchCards"])
  }
};
</script>

<style scoped>
.header-row {
  margin-top: 10px;
  margin-bottom: 10px;
}

.inline {
  display: inline;
}

.chip-height {
  line-height: 36px;
}
</style>
