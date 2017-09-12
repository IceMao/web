import Mock from 'mockjs'

import { tags } from './mock.tags.js'
import { post } from './mock.post.js'

function addToMock(list) {
    list.forEach(n => {
        Mock.mock(n.path, n.data)
    })
}

addToMock(tags)
addToMock(post)
export default Mock