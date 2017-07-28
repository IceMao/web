/**
 * Created by ice on 2017/7/20.
 */
<template>
  <div>
    <c-header></c-header>
    <div class="jumbotron index-jumbotron text-center">
        <div class="hidden">
            <img src="./../common/images/tree.svg" alt="ice" title="Ice">
        </div>
        <div class="container">
            <h1 class="text-hide"><img src="./../common/images/tree3.svg"></h1>
            <p class="lead">ice</p>
        </div>
    </div>
    <!-- image end-->
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="btn-toolbar">
                    <div class="btn-group">
                        <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown">所有分类&nbsp;<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-danger">最新</a>
                    <a href="#" class="btn btn-default">分类</a>
                </div>
            </div>
            <!--列表上面的btn end-->
            <div class="col-md-12 col-sm-12">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>主题</th>
                                <th>分类</th>
                                <th>参与者</th>
                                <th>回复</th>
                                <th>浏览</th>
                                <th>活动</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="/post">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="/post">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td> 
                            </tr>
                            <tr>
                                <td><a href="/post">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="/post">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="/post">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="/post">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="#">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="#">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="#">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="#">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="#">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                            <tr>
                                <td><a href="#">Lumo 1.3.0 is out with a number of new features and small fixes!</a></td>
                                <td>23/11/2013</td>
                                <td>待发货</td>
                                <td>产品4</td>
                                <td>20/10/2013</td>
                                <td>已退货</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- 列表 end-->
        </div>
    </div>
  </div>
</template>

<script>
import cHeader from './components/c-header.vue';
export default {
  data(){
    return {
      msg:"index"
    }
  },
  components:{
    'c-header': cHeader,
  },
  created(){
    console.log("Index");
  }
}
    
</script>