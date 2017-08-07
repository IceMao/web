/**
 * Created by ice on 2017/7/20.
 */
<style lang="scss" scoped>
.index-jumbotron {
    margin: 0 0 48px;
    position: relative;
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
.post-title a{
    font-family: -webkit-pictograph, 'Quicksand', sans-serif;
    text-decoration: none;
}
.post-content{
    font-size: 20px;
    padding-left: 12px;
}
.post-more{
    padding: 9px 18px;
    margin-left: 12px;
    margin-bottom: 8px;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    color: #484848;
    background: #e8e8e8;
    cursor: pointer;
}
.post-more:hover{
    text-decoration: none;
    color: #2e749a;
    background: #dcdcdc;
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
        <a class="lead hidden-xs">编辑资源菜单 - Azure Portal SDK</a>
    </div>
    <!-- image end-->
    <div id="content" class="container">
        <div class="row">
            <div class="col-md-9 post-list">
                <div class="post">
                    <h2 class="post-title"><a href="/post">编辑资源菜单 - Azure Portal SDK</a></h2>
                    <div class="post-content">

                        <p>在进行Azure Portal Extension开发过程中，避免不了对资源菜单的扩展，于是菜单内容在<code>./Client/Browser/ViewModels/AssetTypeViewModel.ts</code>中。</p>
<p>在<code>getMenuConfig</code>方法中添加一个菜单：</p>
<pre><code class="hljs coffeescript">        <span class="hljs-reserved">var</span> <span class="hljs-attribute">yukoItem</span>: MsPortalFx.Assets.MenuItem = {
            <span class="hljs-attribute">id</span>: <span class="hljs-string">"yuko"</span>,
            <span class="hljs-attribute">displayText</span>: <span class="hljs-string">"Yuko Amamiya"</span>,
            <span class="hljs-attribute">icon</span>: ClientIcons.Icons.cloudService,
            <span class="hljs-attribute">supplyBladeReference</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                <span class="hljs-keyword">return</span> ... <span class="hljs-regexp">//</span> 稍后将使其跳转到一个新的blade上
            }
        };
</code></pre><p>找到<code>menuConfig</code>，向指定段中添加上述创建的<code>yukoItem</code>：</p>

                    </div>
                    <a class="post-more">MORE</a>
                    <div class="post-time">Posted @ 04/05/2017</div>
                </div>
                <div class="post">
                    <h2 class="post-title">编辑资源菜单 - Azure Portal SDK</h2>
                    <div class="post-content">

                        <p>在进行Azure Portal Extension开发过程中，避免不了对资源菜单的扩展，于是菜单内容在<code>./Client/Browser/ViewModels/AssetTypeViewModel.ts</code>中。</p>
<p>在<code>getMenuConfig</code>方法中添加一个菜单：</p>
<pre><code class="hljs coffeescript">        <span class="hljs-reserved">var</span> <span class="hljs-attribute">yukoItem</span>: MsPortalFx.Assets.MenuItem = {
            <span class="hljs-attribute">id</span>: <span class="hljs-string">"yuko"</span>,
            <span class="hljs-attribute">displayText</span>: <span class="hljs-string">"Yuko Amamiya"</span>,
            <span class="hljs-attribute">icon</span>: ClientIcons.Icons.cloudService,
            <span class="hljs-attribute">supplyBladeReference</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                <span class="hljs-keyword">return</span> ... <span class="hljs-regexp">//</span> 稍后将使其跳转到一个新的blade上
            }
        };
</code></pre><p>找到<code>menuConfig</code>，向指定段中添加上述创建的<code>yukoItem</code>：</p>

                    </div>
                    <div class="post-more">更多</div>
                    <div class="post-time">Posted @ 4/5/2017</div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="tag">   
                    <p class="tag-title">Tags</p>
                    <ul class="tag-list">
                        <li>NEW</li>
                        <li>HTML</li>
                        <li>NODEJs</li>
                        <li>VueJs</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>AngularJs</li>
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
      scroll: ''
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
    // this.$http.post('http://www.citywealth.cn/importNews', {
    // "SubTitle":"","Time_end":"","Time_start":"","Title":"","Page_current":"1","Position":"1","Rows_per_page":"5"
    // }).then((response) => {
    //     this.artList = response.data.Data;
    //     console.info("1 ", response.data.Data);
    // }).catch(function(response) {
    //     console.warn("错误", response);
    // });
  },
  mounted() {
      window.addEventListener('scroll', this.menu);
  },
}

</script>