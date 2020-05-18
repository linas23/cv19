<template>
  <div>
    <v-data-table class="mt-5" :loading="loading" :headers="headers" :items="datas"></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countryData: [],
      loading: true
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Country",
          value: "country",
          align: "start",
          divider: true
        },
        {
          text: "Confirmed",
          value: "confirmed",
          divider: true,
          align: "center"
        },
        { text: "Deaths", value: "deaths", divider: true, align: "center" },
        {
          text: "Recovered",
          value: "recovered",
          divider: true,
          align: "center"
        }
      ];
    },
    datas() {
      return [...this.countryData];
    }
  },
  async created() {
    //get countries
    // for each country get the relevant data and push it to table
    // https://covid19.mathdro.id/api/countries
    let { countries } = await this.$axios.$get(
      "https://covid19.mathdro.id/api/countries"
    );
    countries = countries.map(el => el.name);

    countries.forEach(async country => {
      try {
        let { confirmed, deaths, recovered } = await this.$axios.$get(
          `https://covid19.mathdro.id/api/countries/${country}`
        );
        let newObj = {
          country,
          confirmed: confirmed.value,
          deaths: deaths.value,
          recovered: recovered.value
        };
        this.countryData.push(newObj);
      } catch (e) {
        console.log(e);
        throw e;
      }
    });
    this.loading = false;
  }
};
</script>

<style>
</style>