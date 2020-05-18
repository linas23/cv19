<template>
  <v-row justify="center">
    <v-col cols="12" sm="6" md="4" v-for="(card,i) in cards" :key="i">
      <transition appear name="slide-up">
        <v-card height="200" width="100%" class="text-center" :style="card.border">
          <v-card-text class="title font-weight-bold">{{card.title}}</v-card-text>
          <v-card-text class="headline">
            <ICountUp :delay="500" :endVal="card.data" />
          </v-card-text>
          <v-card-subtitle>{{card.text}}</v-card-subtitle>
        </v-card>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  components: {
    ICountUp
  },
  props: {
    info: {
      type: Object
    }
  },
  computed: {
    cards() {
      return [
        {
          title: " Confirmed",
          data: this.info.confirmed.value,
          text: "Number of active cases of COVID-19",
          border: {
            "border-bottom": "5px inset orange"
          }
        },
        {
          title: " Deaths",
          data: this.info.deaths.value,
          text: "Number of deaths caused by COVID-19",
          border: {
            "border-bottom": "5px inset red"
          }
        },
        {
          title: " Recovered",
          data: this.info.recovered.value,
          text: "Number of recoveries from COVID-19",
          border: {
            "border-bottom": "5px inset blue"
          }
        }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.slide-up {
  &-enter-active {
    transform: translateY(-50px);
    transition: all 2s ease;
  }
  &-enter-to {
    transform: translateY(0);
  }
}
</style>

