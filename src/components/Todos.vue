<!-- anything wrapped around the template element represents the markup we render on the screen -->
<template>
  <div>
    <!--
      v-for directive allows us to loop through the todos prop array we passed down from our app component.
      "todo" is the variable we name each of our elements as we loop through it. v-bind:key is how to give a 
      unique key value to each element (similar to React) so Vue can make page changes efficient
    -->
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
      <!-- passing "todo" object as a prop named todo to the TodoItem component 
         In the case of v-on:del-todo, we're catching the the del-todo event emitted by the TodoItem and 
         emit this event and the payload upward once more to our App component so we can remove the todo item 
         from our data
      -->
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

/* we're exporting this component named "Todos" so that other components can use it */
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"] // accepting the "todos" prop that's being passed from the main app component
};
</script>

<style scoped>
/* adding the scoped attribute will apply these styles only to this component */
</style>