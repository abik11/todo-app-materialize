<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s12 m8 offset-m2 l4 offset-l4">
        <i class="material-icons prefix">add</i>
        <input v-model="newTodoText" @keyup.enter="addNewTodo" :placeholder="$t('empty_input')">
      </div>
    </div>
    <div class="row">
      <p v-if="error" class="grey-text text-darken-3">
        <i class="material-icons red-text text-darken-4">warning</i>
        {{$t('error.cannot_connect')}}
      </p>
      <p v-else-if="noTasks" class="grey-text text-darken-3">
        <i class="material-icons yellow-text text-darken-1">warning</i>
        {{$t('error.no_data')}}
      </p>
      <ul v-else>
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
import TodoItem from "../components/todoItem.vue";

export default {
  name: "todoList",
  components: { TodoItem },
  data() {
    return {
      newTodoText: "",
      todos: [],
      taskApi: "http://localhost:5000/api/tasks",
      error: false
    };
  },
  computed: {
    noTasks() {
      return this.todos.length == 0;
    }
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
        this.error = true;
        console.error(err);
      }
    }
  },
  async created() {
    await this.getTodos();
  }
};
</script>