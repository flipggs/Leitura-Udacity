import { combineReducers } from 'redux'
import { categories } from './categories'
import { posts, post } from './posts'
import { comments, comment } from './comments'

const rootReducer = combineReducers({
    categories,
    posts,
    post,
    comments,
    comment
})

export default rootReducer