<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <!-- 
      v-on:add-todo is an event listener, listening for a event we made called "add-todo" and then calling the 

    -->
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
import Todos from "../components/Todos";
import Header from "../components/layout/Header";
import AddTodo from "../components/AddTodo";

import axios from "axios";

export default {
  name: "Home",
  components: {
    // adding the list of components that will be directly rendered by our App component
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      //since this method was called for the del-todo event listener, the payload is passed in as an argument
      console.log(this.todos);
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.error(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => res.data)
        .then(todo => (this.todos = [...this.todos, todo]))
        .catch(err => console.error(err));
    }
  },
  created() {
    //created is a native Vue component method similiar to React's componentDidMount lifecycle method and is perfect for something like data fetching
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.data)
      .then(todos => (this.todos = todos))
      .catch(err => console.error(err));
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

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
</style>
