/**
 * Created by ice on 2017/7/20.
 */
<style lang="scss" scoped>
.index-jumbotron {
    margin: 0 0 48px;
    position: relative;
    // background: url('./../common/images/banner.jpg');
    // background-size: cover;
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
}

.index-jumbotron>a {
    width: 100%;
    font-size: 21px;
    display: block;
    cursor: pointer;
    position: absolute;
    top: 49%;
    color: #fff;
}
.padd-top {
    padding-top: 48px;
}
.post {
    margin-bottom: 50px;
}
.post-title a{
    font-family: -webkit-pictograph, 'Quicksand', sans-serif;
    text-decoration: none;
    color: #444;
}
.post-content{
    font-size: 16px;
    padding-left: 12px;
    // padding-top: 5px;
    padding-bottom: 10px;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
.post-more{
    padding: 9px 18px;
    margin-left: 12px;
    margin-bottom: 8px;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    color: #cecece;
    background: #118a83;
    border: 2px #49928b outset;
    cursor: pointer;
    user-select: none;
}
.post-more:hover{
    text-decoration: none;
}
.post-more:active{
    text-decoration: none;
    color: #cecece;
    background: rgb(7, 115, 109);
    border: 2px #49928b inset;
}
.post-time{
    
    margin-left: 12px;
    font-size: 16px;
    font-family: -webkit-pictograph, 'Quicksand', sans-serif;
    color: #b5b5b5;
}
.tag-title{
    font-size: 19px;
    margin-bottom: 10px;
    margin-left: 20px;
}
.tag-list{
    font-size: 14px;
}
.tag-list li{
    padding: 0px 6px;
    margin-bottom: 7px;
    margin-right: 5px; 
    display: inline-block;
    background: #ddd;
    cursor: pointer;
}
.tag-list li:hover{
    background: lightblue;
}

</style>
<template>
  <div>
    <c-header></c-header>

    <div class="index-jumbotron text-center">
        <img src="app/common/images/banner.jpg" width="100%" title="banner">
        <a class="lead hidden-xs">{{topPost.Title}}</a>
    </div>
    <!-- image end-->
    <div id="content" class="container">
        <div class="row">
            <div class="col-md-9 post-list">
                
                <div class="post" v-for="item in posts">
                    <h4 class="post-title"><a href="/post">{{item.Title}}</a></h4>
                    <div class="post-content">
                    {{item.Content}}
                    </div>
                    <a class="post-more">MORE</a>
                    <div class="post-time">Posted @ {{item.CreateTime}}</div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="tag">   
                    <p class="tag-title">Tags</p>
                    <ul class="tag-list">
                        <li v-for='item in tags'>{{item.tag | uppercase }}</li>
                    </ul>
                </div>
            </div>
            <!-- /postList-->
        </div>
    </div>
    <c-footer></c-footer>
    <!-- /footer-->
  </div>
</template>

<script>
import cHeader from 'components/c-header.vue';
import cFooter from 'components/c-footer.vue';
export default {
  data(){
    return {
      tags: '',
      posts:'',
      topPost:''
    }
  },
  methods: {
    menu() {
        this.scroll = $(document).scrollTop();
        let scrollTop = $('.index-jumbotron').height();
        if(this.scroll >= scrollTop){
            $('#nav').addClass('headImg navbar-fixed-top');
            $('#content').addClass('padd-top')
        }else{
            $('#nav').removeClass('headImg navbar-fixed-top');
            $('#content').removeClass('padd-top')
        }
    }
  },
  components:{
    'c-header': cHeader,
    'c-footer': cFooter,
  },
  watch: {
  },
  created(){
    //tag
    this.$http.post('tags.json', {}).then((response) => {
        this.tags = response.data.tags;
    }).catch(function(response) {
        console.warn("Error", response);
    });
    //post
    this.$http.post('post.json', {}).then((response) => {
        this.posts = response.data.post;
        var reverseArr = this.posts.reverse();
        this.topPost = reverseArr[0];
    }).catch(function(response) {
        console.warn("Error", response);
    });
  },
  mounted() {
      window.addEventListener('scroll', this.menu);
  },
}
</script>