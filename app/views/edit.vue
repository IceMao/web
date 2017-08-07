/**
 * Created by ice on 2017/8/1.
 */
<style lang="scss" scoped>
#edit{
    height: 100%;
    input:focus {
        box-shadow: none;
        outline: none;
    }
    .main{
        height: inherit;
        .edit-main{
            height: 100%;
            padding-top: 20px;
            background: #fff;
            border-right: 1px solid #d9d9d9;
            .edit-set{
                height: 36px;
                width: 100%;
                background: #d9d9d9;
                span{
                    padding-right: 20px;
                    font-size: 16px;
                    line-height: 36px;
                    float: right;
                    cursor: pointer;
                    &:hover {
                        color: #32f;
                    }
                }
            }
            .editcontent{
                width: 100%;
                height: calc(100% - 101px);
                padding:20px;
                resize: none;
                &:focus {
                    box-shadow: none;
                    outline: none;
                }
            }
        }
        .preview {
            box-sizing: border-box;
            padding: 40px;
            background: #fcfaf2;
            .preview-title {
                margin-bottom: 20px;
                font-size: 24px;
            }
        }
    }
    
}
  
</style>
<template>
    <div id="edit" class="container-fluid ">
        <div class="row main">
            <div class="col-md-6 col-sm-6 edit-main">
                <input type="text" placeholder="title" v-model="post.Title">
                <input type="text" placeholder="type" v-model="post.CategoryName">
                <div class="edit-set">
                    <a href="index" target="_black">Ice</a>
                    <span @click="save()">Save</span>
                </div>
                <textarea class="editcontent" name="ArticleContent" id="txt_ArticleContent" v-model="post.ArticleContent" @keyup="compile()"></textarea>
                <button @click="submit()">提交</button>
            </div>           
            <div class="col-md-6 col-sm-6 preview">
                <div class="preview-title">{{post.Title}}</div>
                <div id="result"></div>
            </div>
        </div>
    </div>
</template>

<script>
import cHeader from 'components/c-header.vue';
import cFooter from 'components/c-footer.vue';
export default {
  data(){
    return {
      msg:"edit",
      post:{
          Title:'title',
          CategoryName:'categoryName',
          ArticleContent:'content'
      }
    }
  },
  methods:{
    compile: function() {
        var text = document.getElementById("txt_ArticleContent").value;
        var converter = new showdown.Converter();
        //支持显示如同github的勾选框，默认false
        //ep: - [x] This task is done
        converter.setOption("tasklists", true);
        //支持显示table，默认false
        converter.setOption("tables", true);
        //支持图片大小设置，默认为false
        converter.setOption("parseImgDimensions", true);
        /**
         **更多地请看https://github.com/showdownjs/showdown文档
            **/
        var html = converter.makeHtml(text);
        console.info("make", html);
        document.getElementById("result").innerHTML = html;
    },

  },
  components:{
    'c-header': cHeader,
    'c-footer': cFooter,
  },
  created(){
    console.info("Index**",showdown);
    this.$http.post('http://www.citywealth.cn/importNews', {
    "SubTitle":"","Time_end":"","Time_start":"","Title":"","Page_current":"1","Position":"1","Rows_per_page":"5"
    }).then((response) => {
        this.artList = response.data.Data;
        console.info("1 ", response.data.Data);
    }).catch(function(response) {
        console.warn("错误", response);
    });
  }
}
    
</script>