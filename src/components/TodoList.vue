<template>
  <div>
    <ul id="todo-list">
        <li v-for="task in tasks">{{ task }}</li> 
        <!-- <li>A</li> -->
        <!-- <li>B</li> -->
    </ul> 
  </div>
</template>

<script>

export default {
  name: 'todo-list',
  props: ['tasks']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>