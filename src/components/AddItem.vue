<template>
  <div class="add-item">
    <input placeholder="Add Todo Item" v-model="task.item">
    <button v-on:click="addTask">Submit</button>
    <button v-on:click="getTasks">Get Tasks</button>
  </div>
</template>

<script>
  export default {
    name: 'add-item',
    props: ['task', 'addTask', 'getTasks']
  }
</script>

