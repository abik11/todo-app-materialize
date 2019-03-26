<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s12 m8 offset-m2 l4 offset-l4">
        <i class="material-icons prefix">add</i>
        <input 
          v-model="newTodoText" 
          @keyup.enter="addNewTodo" 
          :placeholder="$t('empty_input')" 
        />
      </div>
    </div>
    <div class="row">
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          :key="todo"
          :title="todo"
          @remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'list',
  components: { TodoItem },
  data: function() {
    return {
      newTodoText: '',
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Go out with the dog',
        'Learn React'
      ]
    };
  },
  methods: {
    addNewTodo: function() {
      this.todos.push(this.newTodoText);
      this.newTodoText = '';
    }
  }
};
</script>