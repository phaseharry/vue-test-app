<!-- anything wrapped around the template element represents the markup we render on the screen -->
<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <h3>{{ todo.title }}</h3>
    </div>
  </div>
</template>

<script>
/* we're exporting this component named "Todos" so that other components can use it */
export default {
  name: "Todos",
  props: ["todos"] // accepting the "todos" prop that's being passed from the main app component
};
</script>

<style scoped>
/* adding the scoped attribute will apply these styles only to this component */
</style>