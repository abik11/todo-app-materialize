<template>
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animated bounceIn"
    leave-active-class="animated bounceOut"
  >
    <li class="col s12 m6 l4">
      <div class="card-panel black grey-text">
        {{title}}
        <i class="material-icons cancel" @click="$emit('remove')">cancel</i>
      </div>
    </li>
  </transition>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['title']
};
</script>

<style lang="scss" scoped>
@import "../../css/settings.scss";

li {
  list-style: none;
}

button {
  @include margin-side;
}
</style>