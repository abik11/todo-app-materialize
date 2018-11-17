<template lang="pug">
.row
	p(v-if="loading") {{ $t("loading") }}
	.col.s12.m6.l4(v-else, v-for="comment in comments")
		.card-panel.black.grey-text
			p.user.deep-orange-text.text-darken-4 {{comment.email}}
			hr
			p {{comment.body}})
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
				that.comments = _.each(that.comments, 
					(comment) => comment.email = comment.email.split('@')[0]);
			})
			.catch(function(error){
				console.log(error);
			})
			.then(() => that.loading = false);
	}
}
</script>

<style lang="scss" scoped>
hr{
	border-color: #424242;
}
.user{
	font-size: 1.5rem;
	font-weight: bold;
}
</style>