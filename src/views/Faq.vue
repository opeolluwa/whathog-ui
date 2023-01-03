<template>
  <h1>Frequently Asked Questions</h1>
  <div class="faq__container">
    <AppListItem v-for="(faq, index) in faqs" :key="index" class="faq__item">
      <h2>{{ faq.question }}</h2>
      <p>{{ faq.answer }}</p>
    </AppListItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import faqs from "@/components/faq";
import AppListItem from "@/components/AppListItem.vue";
import type { FaqInterface } from "@/types";
export default defineComponent({
  name: "Faq",
  components: {
    Icon,
    AppListItem
  },
  data: () => ({
    faqs: faqs as Array<FaqInterface>
  })
});
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
  margin-top: 0;
  padding: 0;
}

.faq__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
  column-gap: 65px;
  padding: 5px;
}

.faq__item {
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 0px 3px 13px -7px rgba(0, 0, 0, 0.79);
  box-shadow: none;
  margin-top: 50px;
}

.faq__item h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.faq__item p {
  font-size: 1rem;
  margin-top: 20px;
  line-height: 30px;
}
</style>
