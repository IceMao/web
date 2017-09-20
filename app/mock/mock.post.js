import Mock from 'mockjs'
var Random = Mock.Random;
Random.extend({
    articleTitle: function(date) {
        var title = [
            '编辑资源菜单 - Azure Portal SDK',
            'Video Platform | Kaltura',
            'Kaltura发布社区免费版开源在线视频编辑平台',
            '关系型数据库遵循ACID规则',
            '分布式计算的优点',
            '分布式计算的缺点'
        ]
        return this.pick(title)
    }
});


export const post = [{
    path: 'post.json',
    data: {
        'post|7': [{
            'Id|+1': 1,
            'Title': '@articleTitle',
            'CreateTime': '@datetime("MM/dd/yyyy")',
            'Content': '@cparagraph'
        }]
    }

}]

/**
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
 */