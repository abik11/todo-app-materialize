<template>
  <div class="row">
    <p v-if="loading">{{ $t("loading") }}</p>
    <div v-else class="col s12 m6 l4" v-for="comment in comments" :key="comment.id">
      <div class="card-panel black grey-text">
        <p class="user deep-orange-text text-darken-4">{{comment.email}}</p>
        <hr>
        <p>{{comment.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments",
  data: function() {
    return {
      comments: "",
      loading: false
    };
  },
  created: function() {
    var that = this;
    that.loading = true;
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function(response) {
        that.comments = _.take(response.data, 10);
        that.comments = _.each(
          that.comments,
          comment => (comment.email = comment.email.split("@")[0])
        );
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(() => (that.loading = false));
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/settings.scss";

hr {
  border-color: #424242;
}

.user {
  font-size: 1.5rem;
  font-weight: bold;
  transition: color $transition;
}

.card-panel:hover {
  .user {
    color: $light-orange !important;
  }
}
</style>