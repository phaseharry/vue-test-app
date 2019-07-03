<template>
  <div>
    <form @submit="addTodo">
      <!-- 
        @submit is syntactic sugar for v-on:submit
        when the form is submitted, we call the addTodo method
      -->
      <input class="todo-submission" type="text" v-model="title" name="title" placeholder="Add Todo..." />
      <!-- 
        v-model binds the value that's inside of the input with the value of our data within this component.
        In this case, we're binding the input's value to the title key in our data object
      -->
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddToDo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false
      };
      //Send up to parent via emitting
      this.$emit("add-todo", newTodo);
      //emitting the add-todo event up to the parent component and passing in a new todo object as the payload
      this.title = "";
      //reseting the title to an empty string so user can input more todos
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>