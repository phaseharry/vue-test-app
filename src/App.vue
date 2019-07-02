<template>
  <div id="app">
    <!-- v-bind:"todos" is passing our todos data as a "todos" prop to the Todos component -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <!-- 
      v-on:del-todo is a event listener we created ourself to do something to our data. The "del-todo" is a
      message we emitted upwards from a lower component nested a couple of levels deep. It passed the id of the
      todo we wanted to deleted as a payload
    -->
  </div>
</template>

<script>
import Todos from "./components/Todos";

export default {
  name: "app",
  components: {
    // adding the list of components that will be directly rendered by our App component
    Todos
  },
  data() {
    return {
      todos: [
        { id: 1, title: "Todo One", completed: false },
        { id: 2, title: "Todo Two", completed: false },
        { id: 3, title: "Todo Three", completed: true }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      //since this method was called for the del-todo event listener, the payload is passed in as an argument
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
