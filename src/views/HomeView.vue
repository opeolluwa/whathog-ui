
<template>

  <h6 class="mb-7">
    {{ greeting }} <br /> <strong>Opeoluwa</strong>
  </h6>

  <div id="card" class="elevation-4">
    
  </div>
  <!-- <img src="@/assets/illustrations/splash_screen.svg" alt="ill"> -->

  <button>
    Change language
    <Icon icon="mdi:translate" />
  </button>

  <button>
    Chat with a bit
    <Icon icon="mdi:robot-outline" />
  </button>

  <AppFab icon="mdi:help-circle-outline" route="support" />
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0;
  padding: 0;
}

img{
  max-width: 100%;
}
button {
  background-color: var(--background);
  color: #f5f5f5;
  border: none;
  border-radius: 24px;
  padding: .95rem .5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  margin-top: 1.2rem;
}

#card {
  width: 100%;
  height: 200px;
  border-radius: 24px;
  background-color: var(--primary);
  margin-top: 0;
  color: #f5f5f5;
  padding: .5rem;
}

p.sub-hero-text {
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0;
  padding: 0;
  color: #ccc;
}
</style>

<script  >
import { defineComponent } from "vue";
import AppFab from "@/components/AppFab.vue";
import "../web-speech";
import greeting from "@/components/greetings";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "HomeView",
  components: {
    AppFab,
    Icon,
  },
  data: () => ({
    showModal: false,
    greeting,
  }),
  methods: {
    keelItWithFire() {
      let target = document.querySelector(
        ".sithLord"
      )
      target.style.display = "none";
    },
  },
});
</script>
