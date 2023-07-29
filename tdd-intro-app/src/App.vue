<script setup lang="ts">
import ToDoList from './components/ToDoList.vue';
	const items = [
		{ id: 1, text: 'Item 1' },
		{ id: 2, text: 'Item 2' },
		{ id: 3, text: 'Item 3' },
	];
</script>


<template>
  <ToDoList :items="items"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
