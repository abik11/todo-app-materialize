<template lang="pug">
div
	div(v-for="comment in comments")
		p.user {{comment.email}}
		p {{comment.body}}
		hr
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
	name: 'comments',
	data: function(){
		return {
			comments: ''
		}
	},
	created: function() {
		var that = this;
		axios.get('https://jsonplaceholder.typicode.com/comments')
			.then(function(response){
				that.comments = _.take(response.data, 10);
			})
			.catch(function(error){
				console.log(error);
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
