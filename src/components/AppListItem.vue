<template>
  <div class="list__item">
    <slot></slot>
  </div>
</template>

<style scoped>
.list__item {
  /* text-align: center; */
  background-color: white;
  min-height: 20px;
  margin-top: 10px;
  padding: 7.5px;
  border-radius: 4px;
 
}
</style>

<script lang="ts">
export default {
  name: "AppListItem",
};
</script>
