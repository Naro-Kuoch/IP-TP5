<template>
    <div class="row">
        <article class="row">
            <div class="col-md-2 col-sm-2 hidden-xs">
              <figure class="thumbnail">
                <img class="img-responsive" src="http://www.tangoflooring.ca/wp-content/uploads/2015/07/user-avatar-placeholder.png" />
                <figcaption class="text-center">{{user.name}}</figcaption>
              </figure>
            </div>
            <div class="col-md-10 col-sm-10">
              <div class="panel panel-default arrow left">
                <div class="panel-body">
                  <header class="text-left">
                    <div class="comment-user"><i class="fa fa-user"></i> {{user.name}}</div>
                    <time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i> {{commentItem.commentAt}}</time>
                  </header>
                  <div class="comment-post">
                    <p>
                     {{commentItem.content}}
                    </p>
                  </div>
                  <p class="text-right"><a href="#" class="btn btn-default btn-sm"><i class="fa fa-reply"></i> reply</a></p>
                </div>
              </div>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    name:"Comment",
    props:['commentItem'],
    computed:{
      user(){
        return this.$store.getters.getUser
      }
    },
}
</script>
<style scoped>


</style>