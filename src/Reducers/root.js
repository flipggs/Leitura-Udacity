import { combineReducers } from 'redux'
import { categories } from './categories'
import { posts, post } from './posts'

const rootReducer = combineReducers({
    categories,
    posts,
    post
})

export default rootReducer