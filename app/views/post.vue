<style>
/* 推荐 recommended*/
.recommended{
    position: fixed; z-index: 999;width: 40px; height: 40px; background: #2199d6; cursor: pointer; bottom: 72px; right: 30px; border-radius: 10px;
}
.recommended-arrow{
    font-size: 17px; line-height: 40px;text-align: center;
}
.recommended-arrow>a{
    width: 100%;
    height: 100%;
    display: inline-block;
    color: #fff;
}
.recommended-arrow>a:hover{
    text-decoration: none;
}
/* 文章：详细（时间，作者）*/
.title{
    margin-bottom:30px;
    text-align: center;
    font-family: -webkit-pictograph, 'Quicksand', sans-serif;
}
.message{
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
    font-family: -webkit-pictograph, 'Quicksand', sans-serif;
}
.message>span{
    color: #e7522a;
}
.message>span:first-child{
    margin-right: 12px;
}
.content{
    text-align: justify;
}
/* 留言：replay*/
.replay {
    margin-bottom:20px;
}
.replay-img{
    width:32px;
    height:32px;
    border: 1px solid #ffffff;
    box-shadow: 1px 1px 5px #a7a7a7;
    background: rgb(153, 200, 226);
}
.replay-content{
    padding: 12px 15px;border:1px solid #ddd;
}
</style>
<template>
<div>
    <c-header></c-header>
    <div class="recommended" title="">
        <div class="recommended-arrow">
            <a href="#recommended">Post</a>
        </div>
    </div>
    <!-- 推荐 end-->
    <div class="container">
        <div class="row post" style="padding-top:90px;">
            <div class="col-md-12 col-sm-12 ">
                <h2 class="title">Example body text</h2>
                <div class="message">
                    Tags: <span>Html</span>
                    Time: <span>02/03/2017</span>
                </div>
                <div class="lead content">
                    <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                    <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
                    <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                    <h4>其他</h4>
                    <p>总体感觉是开启了很多的可能性, 特别是对 js 开发者能友好很多. 之前配置 classpath 真是搞得烦死了, 现在完全不用管. 最近 cljs 社区似乎在接入 npm 方面做了一些努力, 感觉能舒心一点.</p>
                    <p>现在看看开发当中, 还有往 Clojars 上传模块这个过程离不开 Boot 或者 Lein, 不知道近期有没有新的方案出来, 那样的话我手头的 build.boot 就能删了. 有点盼头总是好的....
                    </p>
                </div>
                <!--文章 end-->
                <hr>
            </div>
            <!--文章 end-->            
            <div id="recommended" class="col-md-12 col-sm-12">
                <h3>Post</h3>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Time</th>
                                <th>Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="/post">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>Lumo 1.3.0 is out with a number of new features and small fixes!</td>
                                <td>23/11/2013</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>Lumo 1.3.0 is out with a number of new features and small fixes!</td>
                                <td>23/11/2013</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>Lumo 1.3.0 is out with a number of new features and small fixes!</td>
                                <td>23/11/2013</td>
                                <td>22</td>
                            </tr>
                            <tr>
                                <td>Lumo 1.3.0 is out with a number of new features and small fixes!</td>
                                <td>23/11/2013</td>
                                <td>22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- 推荐 end-->
        </div>
    </div>
</div>
</template>
<script>
    import cHeader from './components/c-header';
    export default {
        data(){
            return {
                msg:"post"
            }
        },
        components:{
            'c-header': cHeader
        },
        created(){
            console.info("post999")
        }
    }
</script>