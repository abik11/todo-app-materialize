<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s12 m8 offset-m2 l4 offset-l4">
        <i class="material-icons prefix">add</i>
        <input v-model="newTodoText" @keyup.enter="addNewTodo" :placeholder="$t('empty_input')">
      </div>
    </div>
    <div class="row">
      <ul>
        <li
          is="todo-item"
          v-for="todo in todos"
          :key="todo._id"
          :title="todo.description"
          @remove="removeTodo(todo._id)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "list",
  components: { TodoItem },
  data() {
    return {
      newTodoText: "",
      todos: [],
      taskApi: "http://localhost:5000/api/tasks"
    };
  },
  methods: {
    async addNewTodo() {
      try {
        await axios.post(this.taskApi, { description: this.newTodoText });
        await this.getTodos();
        this.newTodoText = "";
      } 
      catch (err) {
        console.error(err);
      }
    },
    async removeTodo(id) {
      try {
        await axios.delete(`${this.taskApi}/${id}`);
        await this.getTodos();
      }
      catch(err) {
        console.error(err);
      }
    },
    async getTodos() {
      try {
        const tasks = await axios.get(this.taskApi);
        this.todos = tasks.data;
      } 
      catch (err) {
        console.error(err);
      }
    }
  },
  async created() {
    await this.getTodos();
  }
};
</script>