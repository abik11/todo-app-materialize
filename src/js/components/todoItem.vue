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
li {
	list-style: none;
}
button {
	margin-left: 5px;
	margin-right: 5px;
}
</style>
