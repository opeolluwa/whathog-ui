<template>
  <div class="container view">
    <v-container>
      <v-row>
        <v-cols col="12">
          <RouterView></RouterView>
        </v-cols>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0 30px;
  place-content: center;
  place-items: center;
  height: 75vh;
  margin: 20px auto;
  object-fit: contain;
}

img {
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  display: block;
  margin-bottom: 85px;
}

h2 {
  font-weight: 900;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  line-height: 20px;
  color: #6c757d;
  margin-bottom: 30px;
}

button {
  position: relative;
  bottom: 0;
}

button a {
  color: white;
  text-decoration: none;
  text-transform: capitalize;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
export default defineComponent({
  name: "SplashScreen",
  components: {
    BaseButton,
  },
});
</script>
