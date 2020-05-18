
<script>
import { Bar } from "vue-chartjs";
import { bus } from "~/helpers/bus";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      label: "Global"
    };
  },
  computed: {
    ...mapGetters(["info"])
  },
  watch: {
    info() {
      this.$data._chart.destroy();
      this.renderBarChart();
    }
  },
  extends: Bar,
  mounted() {
    this.renderBarChart();
  },
  methods: {
    renderBarChart: function() {
      this.renderChart(
        {
          labels: ["Confirmed", "Deaths", "Recovered"],
          datasets: [
            {
              label: this.label,
              backgroundColor: ["orange", "red", "blue"],
              data: [
                this.info.confirmed.value,
                this.info.deaths.value,
                this.info.recovered.value
              ]
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      );
    }
  },
  created() {
    bus.$on("updateChart", data => {
      this.label = data;
    });
  }
};
</script>

<style>
</style>