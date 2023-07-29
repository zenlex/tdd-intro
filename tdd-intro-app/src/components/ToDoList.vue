<script setup lang="ts">
defineProps<{ items: Array<{id: number, text: string}> }>()

</script>

<template>
  <div>
    <h1>Items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
