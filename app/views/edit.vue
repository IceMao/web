/**
 * Created by ice on 2017/8/1.
 */
<style lang="scss" scoped>
#edit{
    input:focus {
        outline: none;
    }
    .main{
        margin-top: 20px;
        .editcontent{
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 12px 15px;
            resize: none;
            background: #cdcdcd;
            &:focus {
                outline: none;
            }
        }
        .preview {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 12px 15px;
            background: #ddd;
        }
    }
    
}
  
</style>
<template>
    <div id="edit" class="container-fluid ">
        <div class="row main">
            <div class="col-md-6 col-sm-6">
                <input type="text" placeholder="title" v-model="post.Title">
                <input type="text" placeholder="type" v-model="post.CategoryName">
                <textarea class=" editcontent" name="ArticleContent" id="txt_ArticleContent" v-model="post.ArticleContent" @keyup="compile()"></textarea>
            </div>
            
            <div class="col-md-6 col-sm-6">
                <div class="preview" id="result"></div>
            </div>
        </div>
        <button @click="submit()">提交</button>
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