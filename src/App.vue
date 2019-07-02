<template>
  <div id="app">
    <!-- v-bind:"todos" is passing our todos data as a "todos" prop to the Todos component -->
    <Todos v-bind:todos="todos" />
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
