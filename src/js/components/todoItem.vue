<template lang="pug">
transition(appear, 
	name="custom-classes-transition",
	enter-active-class="animated bounceIn"
	leave-active-class="animated bounceOut")
	li {{title}}
		button(v-on:click="$emit('remove')") X
</template>

<script>
export default {
	name: 'todo-item',
	props: ['title']
}
</script>

<style lang="scss" scoped>
@import '../../css/_settings.scss';
li {
	list-style: none;
}
button {
	@include margin-side;
}
</style>