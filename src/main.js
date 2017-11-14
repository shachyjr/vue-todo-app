// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

new Vue({
  // We want to target the div with an id of 'events'
  el: '#app',

  template: '<App v-bind:task="task" v-bind:tasks="tasks" v-bind:addTask="addTask" v-bind:getTasks="getTasks"/>',

  components: { App },
  // Here we can register any values or collections that hold data
  // for the application
  data: { 
    task: {
      item: ''
    },
    tasks: []
  },

  // Methods we want to use in our application are registered here,
  methods: {
    getTasks: function() {
      var vm = this;
      fetch('http://localhost:3333/getTasks', {
        method: 'GET',
        mode: 'cors',
        headers: { 'Access-Control-Allow-Origin':'*' }
      })
      .then(resp => resp.json())
      .then(data => {
        data.forEach(task => {
          this.tasks.push(task.item);
        })
      })
      .catch(err => console.log(err));
    },
    addTask: function() {
      this.tasks.push(this.task.item);
      fetch('http://localhost:3333/postTask', {
        method: 'POST',
        body: JSON.stringify({ item: this.task.item }),
        headers: { 'Content-type': 'application/json' }
      })
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
    }
  }

})
