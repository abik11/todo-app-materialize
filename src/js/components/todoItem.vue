<template lang="pug">
transition(appear, 
	name="custom-classes-transition",
	enter-active-class="animated bounceIn"
	leave-active-class="animated bounceOut")
	li.col.s12.m6.l4
		.card-panel.black.grey-text {{title}}
			i.material-icons.cancel(@click="$emit('remove')") cancel
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