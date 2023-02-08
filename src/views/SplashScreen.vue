<template>
  <div class="container view">
    <v-container>
      <v-row>
        <v-cols col="12">
          <img
            src="@/assets/illustrations/splash_screen.svg"
            alt=" splash screen"
          />
          <h2 class="font-weight-bold text-center mt-7 mb-1">
            Child Abuse Awareness
          </h2>
          <p class="text-disabled text-center my-3 mt-0 mb-10 small">
            This app is designed to help you identify and prevent child abuse.
          </p>

          <router-link :to="{ name: 'login' }">
            <BaseButton text="">
              Get Started <i class="bi bi-arrow-right"></i>
            </BaseButton>
          </router-link>
        </v-cols>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
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
