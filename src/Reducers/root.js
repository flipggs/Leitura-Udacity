import { combineReducers } from 'redux'
import { categories, category_loading } from './categories'
import { posts, post, post_loading, post_success } from './posts'
import { comments, comment } from './comments'

const rootReducer = combineReducers({
    categories,
    category_loading,
    posts,
    post,
    post_loading,
    post_success,
    comments,
    comment
})

export default rootReducer