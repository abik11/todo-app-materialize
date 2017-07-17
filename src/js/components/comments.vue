<template lang="pug">
div
	p(v-if="loading") {{ $t("loading") }}
	div(v-if="!loading", 
		v-for="comment in comments")
		p.user {{comment.email}}
		p {{comment.body}}
		hr
</template>

<script>
export default {
	name: 'comments',
	data: function(){
		return {
			comments: '',
			loading: false
		}
	},
	created: function() {
		var that = this;
		that.loading = true;
		axios.get('https://jsonplaceholder.typicode.com/comments')
			.then(function(response){
				that.comments = _.take(response.data, 10);
				that.loading = false;
			})
			.catch(function(error){
				console.log(error);
				that.loading = true;
			});
	}
}
</script>

<style lang="scss" scoped>
	.user{
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
