<template>
  <div id="app">
    <add-item v-bind:task="task" v-bind:addTask="addTask" v-bind:getTasks="getTasks"></add-item>
    {{task.item}}
    <br>
    <todo-list v-bind:tasks="tasks"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';

export default {
  name: 'app',
  components: {
    TodoList,
    AddItem
  },
  props: ['task', 'tasks', 'addTask', 'getTasks']
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
