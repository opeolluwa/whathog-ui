
<template>

  <h6 class="mb-7 d-none">
    {{ greeting }} <br /> <strong>Opeoluwa</strong>
  </h6>


  <iframe width="560" height="250" src="https://www.youtube.com/embed/M1SQue6khBA" title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
  <RouterLink :to="{ name: 'settings' }" id="translate">
    Change language
    <Icon icon="mdi:translate" />
  </RouterLink>

  <RouterLink :to="{ name: 'bot' }">
    Chat with a bot
    <Icon icon="mdi:robot-outline" />
  </RouterLink>

  <AppFab icon="mdi:help-circle-outline" route="support" class="d-none" />
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0;
  padding: 0;
}

img,
iframe {
  max-width: 100%;
  border-radius: 12px;
}

a {
  background-color: #101010;
  color: #f5f5f5;
  border: none;
  border-radius: 10px;
  padding: .95rem .5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  margin-top: 1.45rem;
  text-decoration: none;
}

a#translate {
  border: 1px solid #101010;
  background: transparent;
  color: unset;
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
