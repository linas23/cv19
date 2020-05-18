<template>
  <div>
    <v-card class="prevention text-center mt-5 py-10">
      <div class="display-1 font-weight-bold grey--text text--darken-2">Prevention</div>
      <div
        class="title"
      >There is currently no vaccine to prevent corona virus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus.</div>
    </v-card>
    <v-card class="doAndDont mt-5">
      <v-row class="ma-0">
        <v-col
          cols="12"
          md="6"
          v-for="(warn,i) in dosAndDont"
          :key="i"
          :style="{textAlign:warn.align,backgroundColor:warn.bgColor}"
          v-scroll-reveal
        >
          <v-card-text class="headline font-weight-bold" style="color:white">{{warn.title}}</v-card-text>
          <div v-for="point in warn.points" :key="point" style="color:white">
            <v-card-text>{{point}}</v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dosAndDont: [
        {
          title: "DO",
          points: [
            "Stay home when you are sick.",
            "Avoid touching your eyes, nose, and mouth.",
            "Clean AND disinfect frequently touched surfaces daily.",
            "Cover your cough or sneeze with a tissue, then throw the tissue in the trash.",
            "Avoid close contact with people who are sick.",
            "Wash your hands often with soap and water for at least 20 seconds, especially after going to the bathroom; before eating; and after blowing your nose, coughing, or sneezing."
          ],
          align: "left",
          bgColor: "#2B8E70"
        },
        {
          title: "DON'T",
          points: [
            "Shake hands with others.",
            "Touch your eyes, nose or mouth if your hands are not clean.",
            "Wear face mask if you aren't infected or aren't taking care of individuals infected by Covid19.",
            "Go to to pharmacy or hospital. If you have corona like symptoms, call 1500 instead.",
            "Go out in groups or where there are a large number of people. Avoid crowds as much as possible."
          ],
          align: "right",
          bgColor: "#C53030"
        }
      ]
    };
  }
};
</script>

