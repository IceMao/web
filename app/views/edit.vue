/**
 * Created by ice on 2017/8/1.
 */
<style>
textarea,
.preview {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
}
textarea {
    min-height: 700px;
    height: 100px;
    max-height: 500px;
    padding: 5px;
    box-sizing: border-box;
    resize: none;
    border-color: #eee;
}
textarea:focus {
    outline: none;
}
.preview {
    height: auto;
    max-height: 700px;
    margin-left: 8px;
    overflow: auto;
    background: #fcfaf2;
}
</style>
<template>
  <div>
    <c-header></c-header>
    <div class="container">
        <input type="text" placeholder="title" v-model="post.Title">
        <input type="text" placeholder="type" v-model="post.CategoryName">
        <div class="editArtical">
            <textarea rows="10" name="ArticleContent" id="txt_ArticleContent" @keyup="compile()">{{post.ArticleContent}}</textarea>
            <div class="preview" id="result"></div>
        </div>
        <button @click="submit()">提交</button>
    </div>
    <c-footer></c-footer>
    <!-- /footer-->
  </div>
</template>

<script>
import cHeader from './components/c-header.vue';
import cFooter from './components/c-footer.vue';
export default {
  data(){
    return {
      msg:"edit"
    }
  },
  components:{
    'c-header': cHeader,
    'c-footer': cFooter,
  },
  created(){
    console.log("Index");
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