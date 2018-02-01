import { combineReducers } from 'redux'
import { categories } from './categories'
import { posts, post } from './posts'
import { comments } from './comments'

const rootReducer = combineReducers({
    categories,
    posts,
    post,
    comments
})

export default rootReducer