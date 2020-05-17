<template>
  <div>
    <p
      class="display-1 text-center"
    >Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
    <div v-if="info">
      <cards :info="info"></cards>
    </div>
    <chart></chart>
    <comptext></comptext>
  </div>
</template>

<script>
import cards from "~/components/cards";
import chart from "~/components/chart";
import comptext from "~/components/text";
import axios from "axios";
export default {
  data() {
    return {
      info: null
    };
  },
  components: {
    cards,
    chart,
    comptext
  },
  async created() {
    let { data } = await axios.get("https://covid19.mathdro.id/api");
    let { confirmed, deaths, recovered } = data;
    this.info = { confirmed, deaths, recovered };
  },
  methods: {
    updateWithCountryData(country) {
      console.log(country);
    }
  }
};
</script>

<style>
</style>