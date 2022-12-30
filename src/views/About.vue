<template>
  <h1>WhatHog</h1>
  <p>
    A bilingual mobile application on creating awareness and prevention of child abuse
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
  setup() {
    return {};
  },
});
</script>


<style scoped>
h1 {
  margin-bottom: 12px;
}

p {
  color: var(--secondary)
}
</style>