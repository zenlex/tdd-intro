<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">I'm a reactive click counter and my count is {{ count }}</button>
    <p>
      Edit
      <code>components/ToDoList.vue</code> to start building your app. Hot Module Reolading (HMR) should be setup. 
    </p>
  </div>

  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
