<script lang="ts">
import { defineComponent } from "vue";
import AppFab from "@/components/AppFab.vue";
import "../web-speech";

export default defineComponent({
  name: "HomeView",
  components: {
    AppFab,
  },
  data: () => ({
    showModal: false,
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
  <h1>Voice Search</h1>
  <h2 class="sithLord">Long press the button to speak</h2>
  <div class="output-you">
    you
  </div>
  <div class="output-bot">
    bot
  </div>
  <button @click="keelItWithFire" id="speak__button">

    <img src="@/assets/mic.svg" alt="voice search" />
  </button>
  <AppFab icon="mdi:robot-outline" route="bot" />
</template>

<style scoped>
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  font-family: "HelveticaNeueLight", "HelveticaNeue-Light",
    "Helvetica Neue Light", "HelveticaNeue", "Helvetica Neue",
    "TeXGyreHerosRegular", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
  font-weight: 300;
  background: #f7f7f7 url(@/assets/img/geometry.png) 0 0 no-repeat;
  background-size: cover;
  color: #333;
}

footer {
  font-size: 0.75em;
  color: silver;
  position: fixed;
  bottom: 1em;
  left: 1em;
}

footer a {
  color: #f80;
}

header {
  margin: 2em 0;
  text-align: center;
}

h1,
h2,
h3 {
  margin: 0;
  text-rendering: optimizeLegibility;
  text-align: center;
}

h1 {
  font-weight: 400;
  font-size: 2.3em;
}

h2 {
  font-weight: 300;
  margin-top: 0.5em;
  margin-top: 0;
}

section {
  margin: 1.5em auto;
  width: 400px;
}

button {
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 200px;
  height: 200px;
  border: 0;
  border-radius: 50%;
  padding: 0.7em 1em;
  margin: 4em auto 3em;
  text-align: center;
  color: #fff;
  box-shadow: 2px 5px 30px rgba(73, 22, 177, 0.45);

  will-change: transform, filter;
  transition: all 0.3s ease-out;
}

button:hover {
  transform: scale(0.92);
}

button:active {
  filter: brightness(0.8);
}

button:focus {
  outline: 0;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 1.3em;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 10px;
}

.fa-github::before {
  content: "\f09b";
}

img {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: block;
  margin: 0 auto;
}
</style>
