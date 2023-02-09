
<template>


  <h6>
    <!-- {{ greeting }}  --><br /> <strong>Opeoluwa</strong>
  </h6>

  <p>{{ $t("test") }}</p>
  <!-- array -->
  <p>{{ $t("menu[0]") }}</p>
  <!-- object -->
  <p>{{ $t("object.a") }}</p>
  <!-- parse -->
  <p>{{ $t("parse", { name: "wangsw" }) }}</p>
  <p>{{ $t("parses.a", { name: "wangsw" }) }}</p>


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
  color: #ccc;
}
</style>
<script lang="ts">
import { useI18n } from "vue3-i18n";
export default {
  setup() {
    const i18n = useI18n();
    const setLocale = (lang: string) => {
      i18n.setLocale(lang);
    };

    return {
      setLocale,
    };
  },
};
</script>
