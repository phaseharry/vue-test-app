<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
    <!-- 
      In the v-bind:class above, we're conditionally binding a class to this element based on the 
      current Todo item's completed value. If it's true, then we apply the "is-complete" class to it.
      If it is false then we don't apply it.
    -->
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      <!-- 
        v-on:change is an only change event listening. Whenever there's a change with the input element, 
        the markComplete method will be called 
      -->
      {{ todo.title }}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
      <!-- 
        @click is syntactic sugar for v-on:click. In the this case, when this button is clicked,
        we emit a "del-todo" event with a payload of the current todo item's id. This gets emitted to its
        parent component which is Todos.
      -->
    </p>
  </div>
</template>


<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed; //accessing the todo object from our props and reassigning it with an inverse value
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  cursor: pointer;
  float: right;
}
</style>


