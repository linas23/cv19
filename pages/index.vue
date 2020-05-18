<template>
  <div>
    <p
      class="display-1 text-center"
    >Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
    <div v-if="info">
      <cards :info="info"></cards>
      <selection @countryChanged="CountryChange"></selection>
      <barChart :style="myStyles"></barChart>
    </div>
    <comptext></comptext>
    <tables></tables>
  </div>
</template>

<script>
import cards from "~/components/cards";
import comptext from "~/components/text";
import selection from "~/components/countrySelection";
import barChart from "~/components/barChart";
import tables from "~/components/table";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["info"]),
    myStyles() {
      return {
        fontSize: "2rem !important"
      };
    }
  },
  components: {
    cards,
    tables,
    comptext,
    selection,
    barChart
  },
  async created() {
    this.getGlobal();
  },
  methods: {
    ...mapActions(["getGlobal", "handleCountryChange"]),
    CountryChange(country) {
      if (country == "Global") {
        this.getGlobal();
      } else {
        this.handleCountryChange(country);
      }
    }
  }
};
</script>

<style>
</style>