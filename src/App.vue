<template>
  <div class="container">
    <Post v-for="item in postList" :key="item.id" :postItem="item"></Post>
  </div>
</template>

<script>

import Post from './components/Post'

export default {
  name: 'App',
  components: {
    Post
  },
  computed:{
    postList(){
      return this.$store.getters.getPost
    }
  }
}
</script>


<style>
@import "//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css";

</style>
