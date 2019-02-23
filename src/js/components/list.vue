<template lang="pug">
.row
  .row
    .input-field.col.s12.m8.offset-m2.l4.offset-l4
      i.material-icons.prefix add
      input(
        v-model="newTodoText",
        @keyup.enter="addNewTodo",
        :placeholder="$t('empty_input')")
  .row
    ul
      li(is="todo-item",
          v-for="(todo, index) in todos",
          :key="todo",
          :title="todo",
          @remove="todos.splice(index, 1)")
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'list',
  components: { TodoItem },
  data: function(){
    return {
      newTodoText: '',
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Go out with the dog',
        'Learn React'
      ]}
    },
    methods: {
      addNewTodo: function () {
         this.todos.push(this.newTodoText)
         this.newTodoText = '';
      }
    }        
}
</script>