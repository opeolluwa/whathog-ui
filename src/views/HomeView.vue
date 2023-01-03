<script lang="ts">
import { defineComponent } from "vue";
import AppFab from "@/components/AppFab.vue";
import "../web-speech";
import greeting from "@/components/greetings";

export default defineComponent({
  name: "HomeView",
  components: {
    AppFab,
  },
  data: () => ({
    showModal: false,
    greeting
  }),
  methods: {
    keelItWithFire() {
      let target =
        document.querySelector(".sithLord") as unknown as HTMLElement
      target.style.display = "none";
    }
  }
});
</script>

<template>
  <h1>
    {{ greeting }}
  </h1>
  <p class="sub-her">
    What would you like to do?
  </p>
  <img src="@/assets/hero.svg" alt="illustration">
  <AppFab icon="mdi:robot-outline" route="bot" />
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0;
  padding: 0;
}

p.sub-hero-text {
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0;
  padding: 0;
  color: #ccc
}
</style>