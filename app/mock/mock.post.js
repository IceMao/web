import Mock from 'mockjs'
var Random = Mock.Random;
Random.extend({
    tag: function(date) {
        var tags = ['News', 'Html', 'Nodejs', 'vuejs', 'html5', 'css3', 'angularjs']
        return this.pick(tags)
    }
});


export const post = [{
    path: 'post.json',
    data: {
        'tags|7': [{
            'id|+1': 1,
            'tag': '@tag'
        }]
    }

}]