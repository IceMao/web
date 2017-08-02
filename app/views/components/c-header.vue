/**
 * Created by ice on 2017/7/20.
 */
 <style>
 .c-blog{
     padding: 7.5px 15px!important;
 }
 </style>
<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand c-blog" href="/index"><img src="./../../common/images/blog.svg" title="ice blog"></img></a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <!--<ul class="nav navbar-nav">
                    <li class="active"><a href="#">小记<span class="sr-only">(current)</span></a></li>
                    <li><a href="#">随笔<span class="sr-only">(current)</span></a></li>
                </ul>-->
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <form class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search">
                            </div>
                        </form>
                    </li>
                    <li><a href="#" data-toggle="modal" data-target="#loginModal">小记</a></li>
                    <li><a href="#" data-toggle="modal" data-target="#regiestModal">随笔</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- nav end-->
</template>

<script>
    console.info("head")
    $(document).ready(function () {
        $.goup({
            trigger: 450,
            bottomOffset: 30,
            locationOffset: 30,
            containerColor: "#78b52a",
            title: '',
            titleAsText: false
        });
    });
</script>