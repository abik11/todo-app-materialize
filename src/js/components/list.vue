<template lang="pug">
div
  input.form-control(v-model="newTodoText",
                     v-on:keyup.enter="addNewTodo",
                     placeholder="Add a todo")
  ul
    li(is="todo-item",
        v-for="(todo, index) in todos",
        v-bind:key="todo",
        v-bind:title="todo",
        v-on:remove="todos.splice(index, 1)")
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'list',
  data: function(){
    return {
      newTodoText: '',
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Mow the lawn'
      ]}
    },
    methods: {
      addNewTodo: function () {
         this.todos.push(this.newTodoText)
         this.newTodoText = '';
      }
    },
    components: { TodoItem }             
}
</script>
